/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:27 AM
 * @author Adam C. Nowak
 * @description
 */

"use strict";


/**
 *  Module Dependencies
 */
var express = require('express'),
    env = require('./libs/config/endpoint'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    app = express();

/*
 ===============================================================
 Express Session Setup
 ===============================================================
 */

var app = module.exports = express(),
    processport = process.env.PORT || 5050;

//Global variable for the Mongo connection pool
global.db = mongoose.createConnection(process.env.MONGOHQ_URL);

global.debug = (process.env.DEBUG_MODE === 'true') || false;

//Include the Environment Module
require('./libs/config/environment.js')(app, express);

/** Routes for the CORS Fix */
//Route to support CORS
require('./routes/routes_cors')(app);
//Route for HTML content
//require('./routes/routes_html')(app);
//Route for the service
//require('./routes/routes_contentmanagement')(app);
//Error routing - Keep last!
//require('./routes/routes_errors')(app);


// start server
app.listen(processport);

//Print out the port on startup
console.log("Port (process.env.PORT): " + processport);
console.log("Port for node.js process: " + app.get('port'));
console.log('APP Address: ' + app.get('address'));