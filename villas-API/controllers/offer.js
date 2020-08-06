const { villaModel, userModel, reservationModel } = require('../models')

module.exports = {
    get: {
        allVillas: (req, res, next) => {
            // const user = req.user;
            const { limit } = req.params
            villaModel.find().sort({ 'likes': -1, 'created_аt': -1 }).limit(+limit)
                .then(villas => {
                    // res.render('homeAuth', { title: 'Trip home page', user, trips })
                    res.status(200).json({ status: true, villas })
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: { err } })
                    console.log(err)
                })
        },
        allVillasForUser: (req, res, next) => {
            const user = req.user;
            villaModel.find({ creatorId: user.id })
                .then(villas => {
                    res.status(200).json({ status: true, villas })
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: { err } })
                    console.log(err)
                })
        },
        villaDetails: (req, res, next) => {
            const villaId = req.params.id;
            const user = req.user;
            villaModel.findById(villaId).populate('creatorId reservations')
                .then(villa => {
                    villa.isCreator = villa.creatorId === user.id;
                    villa.isLiked = villa.likes.includes(user.id)
                    villa.isReserved = !!villa.reservationId
                    res.status(200).json({ status: true, villa })
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: { err } })
                })
        },
        delete: (req, res, next) => {
            const villaId = req.params.id;
            const user = req.user;
            villaModel.findById(villaId)
                .then(villa => {
                    const isOwner = villa.creatorId == user.id
                    if (!isOwner) {
                        return Promise.reject('You don\'t have access to delete villa')
                    }
                    return Promise.all([
                        villa,
                        villaModel.findByIdAndDelete(villaId),
                        userModel.findByIdAndUpdate(user.id, { $pull: { villas: villaId } }),
                    ])
                })
                .then(([villa, deletedTrip, deletedUser]) => {
                    res.status(200).json({ status: true, msg: `Villa with ID ${villaId} is deleted` })
                })
                .catch(err => {
                    console.error(err)
                    res.status(401).json({ status: false, msg: 'You don\'t have access to delete villa' })
                })
        },
        like: (req, res, next) => {
            const user = req.user;
            const villaId = req.params.id;
            Promise.all([
                villaModel.findByIdAndUpdate(villaId, { $push: { likes: user.id } }),
                userModel.findByIdAndUpdate(user.id, { $push: { likes: villaId } })
            ])
                .then(([updatedVilla, updatedUser]) => {
                    res.status(200).json({ status: true, msg: `Villa with ID ${villaId} is liked` })
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: err })
                    console.error(err)
                })
        },
        dislike: (req, res, next) => {
            const user = req.user;
            const villaId = req.params.id;
            Promise.all([
                villaModel.findByIdAndUpdate(villaId, { $pull: { likes: user.id } }),
                userModel.findByIdAndUpdate(user.id, { $pull: { likes: villaId } })
            ])
                .then(() => {
                    res.status(200).json({ status: true, msg: `Villa with ID ${villaId} is disliked` })
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: err })
                    console.error(err)
                })
        },
        notFound: (req, res, next) => {
            const user = req.user;
            res.status(404).json({ status: false, errMsg: 'Url not found' })
            // res.render('404.hbs', { title: 'course | Not found page', user })
        }
    },
    post: {
        book: (req, res, next) => {
            const user = req.user;
            const { villaId, clients, comment } = req.body
            reservationModel.create({ clients, villaId, creatorId: user.id, comments: [comment] })
                .then((reservation) => {
                    Promise.all([
                        reservation,
                        userModel.findByIdAndUpdate(user.id, { $push: { reservations: reservation.id } }),
                        villaModel.findByIdAndUpdate(villaId, { reservationId: reservation.id })
                    ])
                    res.status(200).json({ status: true, msg: `Villa with ID ${villaId} is booked with ${reservation.id}` })
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: err })
                    console.error(err)
                })
        },
        create: (req, res, next) => {
            const user = req.user;
            const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3 } = req.body;
            villaModel.create(
                {
                    name, region, date, beds, nights, price,
                    priceDescription, description, imageUrl,
                    imageUrl2, imageUrl3, creatorId: req.user.id,
                    likes: [], reservationId: undefined
                })
                .then(villa => {
                    return Promise.all([villa, userModel.findByIdAndUpdate(user.id, { $push: { villas: villa.id } })])
                })
                .then(([villa, userUpdated]) => {
                    res.status(200).json({ status: true, msg: `Villa with ID ${villa.id} is added` })
                })
                .catch(err => {
                    if (err.name == 'ValidationError') {
                        res.status(404).json({ status: false, msg: err.errors })
                        console.log(err)
                        return;
                    }
                    res.status(404).json({ status: false, msg: err })
                    console.log(err)
                })
        },
        edit: (req, res, next) => {
            const villaId = req.params.id;
            const user = req.user;
            const { name, region, date, beds, nights, price,
                priceDescription, description, imageUrl,
                imageUrl2, imageUrl3 } = req.body
            villaModel.findById(villaId)
                .then(villa => {
                    const isOwner = villa.creatorId == user.id
                    if (!isOwner) {
                        return Promise.reject('You don\'t have access to edit this property')
                    }
                    return villaModel.findByIdAndUpdate(villaId, {
                        name, region, date, beds, nights, price,
                        priceDescription, description, imageUrl, imageUrl2, imageUrl3
                    }, { "new": true, runValidators: true })
                })
                .then((villaUpdated) => {
                    res.status(200).json({ status: true, msg: `Villa with ID ${villaId} is updated` })
                })
                .catch(err => {
                    if (err.name == 'ValidationError') {
                        res.status(404).json({ status: false, msg: err.errors })
                        return;
                    }
                    res.status(404).json({ status: false, msg: err })
                    console.log(err)
                })
        }
    }
}

