/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:40 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint node: true */

"use strict";

var newrelic = require('newrelic'),
    http = require('http'),
    path = require('path'),
    routing_error = require('../utils/routing/routing_error'),
    errors = require('../error/abstracterror'),
//Required in-order to render HTML Templates
    Mustache = require('mustache'),
//Required Templates
    TemplateData = require('../template/templatedata'),
    template = require('../../views/template');

module.exports = function (app, express) {
    //Template data for the 400 and 500 pages
    var templatedata = new TemplateData(),
        error = Object.create(routing_error);

    /*  =====================================
     ERROR HANDLING
     ===================================== */

    function logErrors(err, req, res, next) {
        console.error(err.stack);
        next(err);
    }

    function clientErrorHandler(err, req, res, next) {
        if (req.xhr) {
            res.send(500, { error: 'Something blew up!' });
        } else {
            next(err);
        }
    }

    function errorHandler(err, req, res, next) {
        res.status(500);
        res.render('error', { error: err });
    }

    function handle404(req, res) {
        //Render a 404 Page
        //Set the 404 Status
        res.status(404);
        //Setup the Data for the Mustache Template
        var data = templatedata.data.error,
            html;
        data.global = templatedata.data.global;
        html = Mustache.render(template.global.error.s404.page, data);
        res.send(html);
        res.send('404: Page not Found', 404);
    }

    function handle500(err, req, res, next) {
        //Print the error to the Console
        console.error(err.stack);

        //Return a 500 Page
        //res.send('500: Internal Server Error', 500);
        //res.send(500, { error: err });

        //Set the 500 Status
        res.status(500);
        //Setup the Data for the Mustache Template
        var data = templatedata.data.error,
            html;
        data.global = templatedata.data.global;
        data.err = err;
        html = Mustache.render(template.global.error.s500.page, data);
        res.send(html);
    }

    /*  =====================================
     Application Configuration
     ===================================== */

    app.configure(function () {
        app.use(express.bodyParser());
        app.use(express.logger());
        app.use(express.methodOverride());

        app.use(app.router);
        app.use('/style', express.static('public/assets/css'));
        app.use('/img', express.static('public/assets/img'));
        app.use('/images', express.static('public/assets/images'));
        app.use('/fonts', express.static('public/assets/fonts'));
        app.use('/js/app', express.static('public/js/app'));
        app.use('/js/lib', express.static('public/js/lib'));
        app.use('/facebook', express.static('public/html/facebook'));

        // Handle 404
        app.use(handle404);
        // Handle 500
        app.use(handle500);

        app.use(function (err, req, res, next) {
            // only handle `next(err)` calls
            console.error(err.stack);
            if (err instanceof errors.NotFound) {
                res.send(404, err.message);
            } else if (err instanceof errors.DataBaseNotAvailable) {
                res.send(err.httpCode, err.message);
            } else if (err instanceof errors.Validation) {
                res.send(err.httpCode, err.message);
            } else if (err instanceof errors.BadContentType) {
                res.send(err.httpCode, err.message);

            } else {
                res.send(500, 'server error:' + err.message);
            }
        });
        //Error Handling
//        app.use(logErrors);
//        app.use(clientErrorHandler);
//        app.use(errorHandler);
    });


    //Export the Addresses

    app.configure('development', function () {
        app.use(express.bodyParser());
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
        app.use(express.methodOverride());

        app.use(app.router);
        app.use('/style', express.static('public/assets/css'));
        app.use('/img', express.static('public/assets/img'));
        app.use('/images', express.static('public/assets/images'));
        app.use('/fonts', express.static('public/assets/fonts'));
        app.use('/js/app', express.static('public/js/app'));
        app.use('/js/lib', express.static('public/js/lib'));
        app.use('/facebook', express.static('public/html/facebook'));

        // Handle 404
        app.use(function(req, res) {
            res.send('404: Page not Found', 404);
        });
        // Handle 500
        app.use(function(error, req, res, next) {
            res.send('500: Internal Server Error', 500);
        });

        app.use(function (err, req, res, next) {
            // only handle `next(err)` calls
            console.error(err.stack);
            if (err instanceof errors.NotFound) {
                res.send(404, err.message);
            } else if (err instanceof errors.DataBaseNotAvailable) {
                res.send(err.httpCode, err.message);
            } else if (err instanceof errors.Validation) {
                res.send(err.httpCode, err.message);
            } else if (err instanceof errors.BadContentType) {
                res.send(err.httpCode, err.message);

            } else {
                res.send(500, 'server error:' + err.message);
            }
        });
        //Error Handling
//        app.use(logErrors);
//        app.use(clientErrorHandler);
//        app.use(errorHandler);
    });//END development

    app.configure('production', function () {
        app.use(express.bodyParser());
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
        app.use(express.methodOverride());

        app.use(app.router);
        app.use('/style', express.static('public/assets/css'));
        app.use('/img', express.static('public/assets/img'));
        app.use('/images', express.static('public/assets/images'));
        app.use('/fonts', express.static('public/assets/fonts'));
        app.use('/js/app', express.static('public/js/app'));
        app.use('/js/lib', express.static('public/js/lib'));
        app.use('/facebook', express.static('public/html/facebook'));

        // Handle 404
        app.use(function(req, res) {
            res.send('404: Page not Found', 404);
        });
        // Handle 500
        app.use(function(error, req, res, next) {
            res.send('500: Internal Server Error', 500);
        });

        app.use(function (err, req, res, next) {
            // only handle `next(err)` calls
            console.error(err.stack);
            if (err instanceof errors.NotFound) {
                res.send(404, err.message);
            } else if (err instanceof errors.DataBaseNotAvailable) {
                res.send(err.httpCode, err.message);
            } else if (err instanceof errors.Validation) {
                res.send(err.httpCode, err.message);
            } else if (err instanceof errors.BadContentType) {
                res.send(err.httpCode, err.message);

            } else {
                res.send(500, 'server error:' + err.message);
            }
        });
        //Error Handling
//        app.use(logErrors);
//        app.use(clientErrorHandler);
//        app.use(errorHandler);
    });//END production


};//END module.exports