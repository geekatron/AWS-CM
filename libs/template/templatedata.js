/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:41 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint node: true */
/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
"use strict";

//Required modules
var fs = require('fs'),
    _ = require('underscore');

function Template() {

};
function Template() {
    var self = this,
        data_global_loc = "views/data/global.json",
        data_page_loc = {
            "error" : "views/data/error.json",
            //Customizable Template Sections
            "home" : "views/data/home.json"
        };

    self.data = {};

    (function () {
        function handleGlobalDataResponse(err, data) {
            if (!_.isUndefined(err) && !_.isNull(err)) {
                //Handle error
                console.log("ERR: Couldn't find global data!");
            } else {
                self.data.global = JSON.parse(data);
            }
        }//END handleGlobalDataResponse


        function handleErrorDataResponse(err, data) {
            if (!_.isUndefined(err) && !_.isNull(err)) {
                //Handle error
                console.log("ERR: Couldn't find error data!");
            } else {
                self.data.error = JSON.parse(data);
            }
        }//END handleReportAnalyticsDataResponse

        function handleHomeDataResponse(err, data) {
            if (!_.isUndefined(err) && !_.isNull(err)) {
                //Handle error
                console.log("ERR: Couldn't find home data!");
            } else {
                self.data.home = JSON.parse(data);
            }
        }//END handleGlobalDataResponse

        //Load the Global Data
        fs.readFile(data_global_loc, "utf8", handleGlobalDataResponse);
        //Load the Page specific Data
        fs.readFile(data_page_loc.error, "utf8", handleErrorDataResponse);
        fs.readFile(data_page_loc.home, "utf8", handleHomeDataResponse);
    })()
}

var data = {},
    templates = {};


module.exports = Template;