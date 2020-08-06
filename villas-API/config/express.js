const express = require('express');
// const handlebars = require('express-handlebars');
const cors = require('cors');
const routes = require('../routes')
// const cookieParser = require('cookie-parser');
const villaController = require('../controllers/offer')

module.exports = (app) => {

    //TODO: Setup the view engine
    //HandelBars should be deleted
    // app.engine('.hbs', handlebars({
    //     extname: '.hbs'
    // }));
    // app.set('view engine', '.hbs');

    app.use(cors({
        exposedHeaders: 'Authorization'
    }));
    app.use(express.json())
    //TODO: Setup the body parser
    app.use(express.urlencoded({ extended: true })); //to recognize req.body in post request
    // app.use(cookieParser());

    //TODO: Setup the static files
    //static should be deleted
    app.use('/static', express.static('static'));
    // app.use('/', routes);
    // app.use('/', routes.home);
    app.use('/user', routes.user);
    app.use('/offer', routes.offer);
    app.use('/reservation', routes.reservation);
    app.use('*', villaController.get.notFound)
};