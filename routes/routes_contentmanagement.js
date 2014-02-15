/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 3:00 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint node: true */
/*global _ */


"use strict";
var _ = require('underscore'),
    CM = require('../libs/content/management/contentmanagement.js'),
    errors = require('../libs/error/abstracterror'),
    config = require('../libs/config/endpoint');

module.exports = function (app) {

    app.post("*", function (req, res, next) {
        if ((req.get('content-length')) !== '0') {

            var cType = req.get('content-type');

            if (!_.isUndefined(cType)) {


                if (cType.toLowerCase().indexOf('application/json') !== -1) {
                    console.log('content type was:' + cType);
                    next();
                } else {
                    console.log('content type was:' + cType);
                    next(new errors.BadContentType('Must specify application/json'));

                }
            } else {
                console.log('content type was:' + cType);
                next(new errors.BadContentType('Must specify application/json'));

            }
        } else {
            next();
        }
    });


    /**
     * Return all the Image and Video content for the library
     */
    app.get("/content/library/:libraryid/multimedia", function (req, res, next) {
        var libraryid = req.params.libraryid,
            region = req.query.region,
            prefix = req.query.prefix,
            delimiter = req.query.delimiter,
            cm = new CM(region, libraryid, prefix, delimiter);

        cm.listMultimedia(function (error, response) {
            if (error) {
                next(error);
            } else {
                res.send('200', response);
            }
        });
    });

};