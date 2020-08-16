const mongoose = require('mongoose');
const villaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name of the property !'],
        match: [/^(\w\s?){4,}$/, 'Name should contains not less than 4 english letter, numbers and whitespase!']
    },
    region: {
        type: String,
        required: [true, 'Please enter the name of the location !'],
        match: [/^(\w\s?){4,}$/, 'Name should contains not less than 4 english letter, numbers and whitespase!']
        // match: [/^[a-zA-z-/]{4,}$/, 'Name should contains not less than 4 english letter, numbers and whitespase!']
    },
    date: {
        type: String,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    nights: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceDescription: {
        type: String,
        required: [true, 'Please enter payment policy !']
    },
    coordinates: {
        lat: {
            type: String
        },
        lng: {
            type: String
        }
    },
    description: {
        type: String,
        maxlength: [5000, 'It is allow maximum 5000 characters!']
    } || 'No description',
    imageUrl: {
        type: String,
        required: [true, 'Please add one photo at least !'],
        match: [/^(https?)\:\/\/.*/, 'Image url should begins with http or https!']
    },
    imageUrl2: {
        type: String,
        match: [/^(https?)\:\/\/.*/, 'Image url should begins with http or https!']
    } || 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png',
    imageUrl3: {
        type: String,
        match: [/^(https?)\:\/\/.*/, 'Image url should begins with http or https!']
    } || 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png',
    likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' },
    reservationId: { type: mongoose.Types.ObjectId, ref: 'Reservation' },
},
    {
        timestamps: { createdAt: 'created_аt' }
    }
)

module.exports = mongoose.model('Villa', villaSchema);