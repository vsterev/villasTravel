const { reservationModel } = require('../models')


module.exports = {
    get: {
        all: (req, res) => {
            const user = req.user;
            reservationModel.find({ creatorid: user.id })
                .then(reservations => {
                    res.status(200).json({ status: true, reservations })
                    console.log(reservations)
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: err })
                    console.error(err)
                })
        },
        details: (req, res) => {
            const user = req.user;
            const reservationId = req.params.id;
            reservationModel.findById(reservationId).populate('villaId creatorId')
                .then(reservation => {
                    res.status(200).json({ status: true, reservation })
                    console.log(reservations)
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: err })
                    console.error(err)
                })
        }
    },
    post: {
        addComment: (req, res) => {
            const user = req.user;
            const { reservationId, comment } = req.body;
            reservationModel.findByIdAndUpdate(reservationId, { $push: { comments: comment } }, { "new": true })
                .then(updated => {
                    res.status(200).json({ status: true, msg: "Comment are added" })
                    console.log(updated)
                })
                .catch(err => {
                    res.status(404).json({ status: false, msg: err })
                    console.error(err)
                })
        }
    }
}