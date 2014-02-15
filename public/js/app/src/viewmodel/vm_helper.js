/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 8:25 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
"use strict";

ldrly.viewmodel = {};

//View Model Helper Methods
ldrly.viewmodel.helper = {};

ldrly.viewmodel.helper.onlineStatus = function () {
    //Update the Online/Offline Status
    $('#product_status').removeClass('offline');
    $('#product_status').addClass('online');
    //Update the Status Icon
    $('#product_status_icon').removeClass('icon-refresh');
    $('#product_status_icon').removeClass('icon-off');
    $('#product_status_icon').addClass('icon-globe');
    //Update the Status Text
    $('#product_status_text').html('Online');
};

ldrly.viewmodel.helper.offlineStatus = function () {
    //Update the Online/Offline Status
    $('#product_status').removeClass('online');
    $('#product_status').addClass('offline');
    //Update the Status Icon
    $('#product_status_icon').removeClass('icon-refresh');
    $('#product_status_icon').removeClass('icon-globe');
    $('#product_status_icon').addClass('icon-off');
    //Update the Status Text
    $('#product_status_text').html('Offline');
};


ldrly.viewmodel.helper.showStatus = function () {
    //Show the progress dialog
    $('#status').removeClass('hide');
    $('#progress-bar').removeClass('hide');
    $('#progress').removeClass('hide');

    $('#success-alert').addClass('hide');
    $('#error-alert').addClass('hide');

    //Update the progress bar status
    $('#progress-bar').css('width', '50%');
    $('#progress').addClass('active');

    //Clear any error messages
    $('#alert-msg').empty();
};

ldrly.viewmodel.helper.hideStatus = function () {
    //Update the progress bar status
    $('#progress-bar').css('width', '0%');
    $('#progress').removeClass('active');
    $('#progress').addClass('hide');

    //Clear any error messages
    $('#alert-msg').empty();

    //Hide the progress dialog

    $('#success-alert').addClass('hide');
    $('#error-alert').addClass('hide');
    $('#progress-bar').addClass('hide');
    $('#status').addClass('hide');
};

ldrly.viewmodel.helper.errorStatus = function (msg) {
    $('#success-alert').addClass('hide');
    $('#error-alert').removeClass('hide');
    //Remove the style display: none;
    $('#error-alert').removeAttr('style');
    $('#progress').removeAttr('style');

    //Update the Modal Progress Bar to Danger
    $('#progress-bar').addClass('bar-danger');
    $('#progress-bar').removeClass('bar-success');
    $('#progress').removeClass('active');

    //Present the error message
    if (msg) {
        $('#error-alert-msg').html(msg);
        //$('#alert-msg').html(msg);
    }
};

ldrly.viewmodel.helper.successStatus = function (msg) {
    $('#error-alert').addClass('hide');
    $('#success-alert').removeClass('hide');
    //Remove the style display: none;
    $('#success-alert').removeAttr('style');
//    $('#progress-bar').removeAttr('style');
    $('#progress').removeAttr('style');

    //$('#success-alert').removeClass('fade');
    //$('#success-alert').addClass('fade in');

    //Update the Width to 100%
    $('#progress-bar').css('width', '100%');

    //Update the Modal Progress Bar to Success
    $('#progress-bar').addClass('bar-success');
    $('#progress-bar').removeClass('bar-danger');
    $('#progress').removeClass('active');


    if (msg) {
        //$('#alert-msg').html(msg);
        $('#success-alert-msg').html(msg);
    }
};