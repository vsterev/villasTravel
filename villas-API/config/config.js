const env = process.env.NODE_ENV || 'local';
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;
const config = {
    cloud: {
        port: process.env.PORT || 4000, //3000
        dataBaseUrl: `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-azuwr.mongodb.net/villas`
    },
    local: {
        port: 4000,
        dataBaseUrl: 'mongodb://127.0.0.1:27017/villas'
    }
};
module.exports = config[env];
