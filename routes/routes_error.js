/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 8:46 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint node: true */

"use strict";

//ldrly required artifacts
var routing_error = require('../libs/utils/routing/routing_error'),
    env = require('../libs/config/endpoint.js'),
    TemplateData = require('../libs/template/templatedata'),
    template = require('../views/template'),
    format = require('util').format,
    template = require('../views/template/template'),

//Include npm modules
    _ = require("underscore"),
    fs = require('fs'),
    Mustache = require('mustache'),
    S = require('string');

module.exports = function (app) {
    var error = Object.create(routing_error),
        templatedata = new TemplateData();

    //The 404 route -> ALWAYS KEEP THIS AS THE LAST ROUTE!!!
    app.get('*', function(req, res) {
        res.status(404);
        //Setup the Data for the Mustache Template
        var data = templatedata.data.error,
            html;
        data.global = templatedata.data.global;
        html = Mustache.render(template.global.error.s404.page, data);
        res.send(html);
        res.send('404: Page not Found', 404);
    });

};