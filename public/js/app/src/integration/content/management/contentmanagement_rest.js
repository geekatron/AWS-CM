/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 8:33 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
'use strict';

ldrly.integration.rest.content = {};

ldrly.integration.rest.content.get = function (profile, callback) {
    var url = ldrly.config.getEndPoints().ldrly,
        userprofile = profile,
        app = 'contentmanagement',
        appprofile = userprofile.app[app],
        bucket = appprofile.library,
        delimiter = '/',
        prefix = appprofile.catalog,
        resource = '/content/library/' + bucket + '/multimedia/?prefix=' + prefix + '&delimiter=' + delimiter,

        img = [],
        vid = [];

    console.log('Setting up content!');

    var request = $.ajax(
        {
            url : url + resource,
            type : 'GET',
            contentType: "application/json; charset=utf-8",
            headers : {
                'Accept' : 'application/json'
            }
        }
    );

    request.done(function (result) {
        callback(undefined, result);
    });
    request.always(function (result) {

    });
    request.fail(function (XHR, textStatus, errorThrown) {
        console.log("Error! " + textStatus + ':' + errorThrown);
        //Create an Error Object
        var error = { responseText : XHR.responseText, status : XHR.status, statusText : XHR.statusText };
        //Pass back the Error
        callback(error);
    });

};