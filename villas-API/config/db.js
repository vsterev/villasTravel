const mongoose = require('mongoose');
const config = require('./config');

module.exports = function () {
    return mongoose.connect(config.dataBaseUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
}