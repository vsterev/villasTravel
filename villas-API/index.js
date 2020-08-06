const dbConnect = require('./config/db')
const config = require('./config/config')
const app = require('express')();
const routes = require('./routes')
dbConnect()
    .then(() => {
        require('./config/express')(app);
        app.use(function (err, req, res, next) { //global error handling
            console.error(err);
            // res.render('500', { errorMessage: err.message })
        })
        app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
    })
    .catch(err => {
        console.log(err);
    })