/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:35 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint node: true */

"use strict";

var endpoints = {
    aws_cms_url : "awscms.geekatron.org",
    aws : {
        accessKeyId : process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
    }
};

//Export the endpoints
exports.endpoint = endpoints;

