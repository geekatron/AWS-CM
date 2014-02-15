/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:58 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint node: true */

"use strict";

//Required AWS CMS Modules
var env = require('../../config/endpoint.js');
//Required Modules
var http = require('http'),
    _ = require("underscore"),
    AWS = require('aws-sdk');

function Content(region, bucket, prefix, delimiter) {
    var myRegion = region,
        myBucket = bucket,
        myPrefix = prefix,
        myDelimiter = delimiter,
        awsS3Resouce = '.s3.amazonaws.com',
        s3 = new AWS.S3(),
        params = {
            Bucket : myBucket,
            Delimiter : myDelimiter,
            Prefix : myPrefix
        };

    if (_.isUndefined(myRegion)) {
        //Set the region for future requests: {region: 'us-east-1'}
        myRegion = 'us-east-1';
    }
    if (_.isUndefined(myDelimiter)) {
        myDelimiter = ',';
    }
    //Set the region
    AWS.config.update({region: myRegion});

    this.list = function (callback) {
        var content = {
                kind: 'content#objectList',
                url : 'http://' + myBucket + awsS3Resouce + '/',
                content : []
            },
            item;
        params = {
            Bucket : myBucket,
            Delimiter : myDelimiter,
            Prefix : myPrefix
        };

        function formatResponse(objects) {
            _.each(objects, function(object) {
                item = { url : 'http://' + myBucket + awsS3Resouce + '/' + object.Key };
                content.data.push(item);
            });

            callback(undefined, content);
        }

        function handleObjectList(err, data) {
            if (!_.isUndefined(err) && !_.isNull(err)) {
                callback(err);
            } else {
                //callback(undefined, data);
                var objects =  data.Contents.slice(1, data.Contents.length)
                //callback(undefined, data.Contents.slice(1, data.Contents.length));
                formatResponse(objects);
            }
        }

        s3.listObjects(params, handleObjectList);
    };

    this.listMultimedia = function (callback) {
        var content = {
                kind: 'content#objectList',
                url : 'http://' + myBucket + awsS3Resouce + '/',
                img : [],
                vid : []
            },
            item,
            img = false,
            vid = false,
            imgParams,
            vidParams;
        //Set the parameters for the S3
        imgParams = {
            Bucket : myBucket,
            Delimiter : myDelimiter,
            Prefix : myPrefix + 'img/'
        };
        vidParams = {
            Bucket : myBucket,
            Delimiter : myDelimiter,
            Prefix : myPrefix + 'vid/'
        };

        function commonCallback(err, gotImg, gotVid) {
            if (!_.isUndefined(err) && !_.isNull(err)) {
                callback(err);
            } else {
                if (!_.isUndefined(gotImg)) {
                    img = gotImg;
                }
                if (!_.isUndefined(gotVid)) {
                    vid = gotVid;
                }
            }

            if (img && vid) {
                callback(undefined, content);
            }

        }

        function formatImageResponse(objects) {
            if (objects.length > 0) {
                _.each(objects, function(object) {
                    item = 'http://' + myBucket + awsS3Resouce + '/' + object.Key;
                    content.img.push(item);
                });
            }

            commonCallback(undefined, true, undefined);
        }

        function formatVideoResponse(objects) {
            if (objects.length > 0) {
                _.each(objects, function(object) {
                    item = 'http://' + myBucket + awsS3Resouce + '/' + object.Key;
                    content.vid.push(item);
                });
            }

            commonCallback(undefined, undefined, true);
        }

        function handleImageListResponse(err, data) {
            if (!_.isUndefined(err) && !_.isNull(err)) {
                callback(err);
            } else {
                //callback(undefined, data);
                var objects =  data.Contents.slice(1, data.Contents.length)
                //callback(undefined, data.Contents.slice(1, data.Contents.length));
                formatImageResponse(objects);
            }
        }

        function handleVideoListResponse(err, data) {
            if (!_.isUndefined(err) && !_.isNull(err)) {
                callback(err);
            } else {
                //callback(undefined, data);
                var objects =  data.Contents.slice(1, data.Contents.length)
                //callback(undefined, data.Contents.slice(1, data.Contents.length));
                formatVideoResponse(objects);
            }
        }

        s3.listObjects(imgParams, handleImageListResponse);
        s3.listObjects(vidParams, handleVideoListResponse);

    };

    this.get = function (id, callback) {
        params = {
            Bucket : myBucket,
            Key : myPrefix + id
        };

        function handleObjectResponse(err, data) {
            if (!_.isUndefined(err) && !_.isNull(err)) {
                callback(err);
            } else {
                //callback(undefined, data);
                callback(undefined, data);
            }
        }

        s3.getObject(params, handleObjectResponse);
    };
}

//Export the Content Object
module.exports = Content;
