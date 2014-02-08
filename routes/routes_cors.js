/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:44 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint node: true */

"use strict";

//Required DEX Modules
var routing_error = require('../libs/utils/routing/routing_error'),
    routing_validation = require('../libs/utils/routing/routing_validation.js');

//Include npm modules
var _ = require("underscore");

module.exports = function (app) {
    /**
     * Add the Cross-Origin Resource Sharing (CORS) Header to the response.
     * Enable calling the service from a different domain.
     */
    app.all('/*', function (req, res, next) {
        //Working towards CORS Compliance
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Content-Length,Accept,Origin,Authorization");

        var validation;

        if (req.method === "OPTIONS") {
            console.log("OPTIONS Called!");
            //Respond with an OK (200)
            res.send(200);
        } else if (_.isEqual(req.method, "GET")) {
            //Verify headers for GET request
            validation = Object.create(routing_validation);
            if (validation.verifyGETRequest(req, res)) {
                next();
            }
        } else if (_.isEqual(req.method, "PUT")) {
            //Verify headers for PUT request
            validation = Object.create(routing_validation);
            if (validation.verifyPUTRequest(req, res)) {
                next();
            }
        } else if (_.isEqual(req.method, "POST")) {
            //Verify headers for POST request
            validation = Object.create(routing_validation);
            if (validation.verifyPOSTRequest(req, res)) {
                next();
            }
        } else if (_.isEqual(req.method, "DELETE")) {
            //Verify headers for DELETE request
            validation = Object.create(routing_validation);
            if (validation.verifyDELETERequest(req, res)) {
                next();
            }
        } else {
            next();
        }

    });//END app.all

};

