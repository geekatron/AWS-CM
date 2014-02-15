/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 8:32 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly, ui */
"use strict";

/* Declare the namespace for Integration */
ldrly.integration = {};
ldrly.integration.error = {};
ldrly.integration.rest = {};

/*            Error Handling for Responses
 ==================================================
 */
ldrly.integration.error.xhr = function handleXHRFailure(XHR, textStatus, errorThrown) {
    console.log("Error! " + errorThrown);

    var err = { responseText : XHR.responseText, status : XHR.status, statusText : XHR.statusText },
        template = '',
        data = '';

    //Use for Error logging in-order to log an problematic/failed calls

    /* Use to throw Alert Dialogs */
    //Get the template & Data for the modal
    template = ui.template.global.modal.error.xhr;
    data = err;

    //Generate and Render the HTML
    var html = Mustache.to_html(template, data);
    $('#myModal').html(html);
    //Show the modal
    $('#myModal').modal('show');
};