const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    clients: {
        type: []
    },
    comments: {
        type: []
        // maxlength: [500,'Max length of comment should be 500 letters!']
    },
    villaId: { type: mongoose.Types.ObjectId, ref: 'Villa' },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Reservation', reservationSchema);