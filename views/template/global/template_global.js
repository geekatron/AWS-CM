/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 7:57 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
"use strict";

/* ********************** */
/*  TEMPLATE Scaffolding  */
/* ********************** */
ui.template.global = {};

ui.template.global.libs = {};
ui.template.global.style = {};

ui.template.global.page = {};
ui.template.global.page.head = {};
ui.template.global.page.body = {};

ui.template.global.menu = {};
ui.template.global.breadcrumbs = {};
ui.template.global.home = {};
ui.template.global.footer = {};

ui.template.global.modal = {};
ui.template.global.modal.error = {};
ui.template.global.modal.error.xhr = {};

ui.template.ldrly.error = {};

ui.template.ldrly.error =
    '<div id="status" class="container-fluid hide">' +
    //Progress Bar
    '<div class="row-fluid span12">' +
    '<div id="progress" class="progress progress-striped active closable">' +
    '<div id="progress-bar" class="bar" style="width: 0%;" ></div>' +
    '</div>' +
    '</div>' +
    //Error Message
    '<div id="error-alert" class="alert alert-block alert-error fade in hide closable">' +
    //'<button type="button" class="close" data-dismiss="alert">×</button>' +
//            '<button type="button" class="close" data-hide="alert">×</button>' +
    //'<button type="button" class="close" data-hide="alert" data-bind="click: ldrly.viewmodel.helper.hideStatus">×</button>' +
    '<button type="button" class="close" data-hide="closable" data-bind="click: ldrly.viewmodel.helper.hideStatus">×</button>' +
    '<h4 class="alert-heading">Error!!!</h4>' +
    '<p id="error-alert-msg">The operation has failed! Please try again later.</p>' +
    '</div>' +
    //Success Message
    '<div id="success-alert" class="alert alert-block alert-success fade in hide closable">' +
//            '<button type="button" class="close" data-hide="alert">×</button>' +
    //        '<button type="button" class="close" data-dismiss="alert" data-bind="click: ldrly.viewmodel.helper.hideStatus">×</button>' +
    //'<button type="button" class="close" data-hide="alert" data-bind="click: ldrly.viewmodel.helper.hideStatus()">×</button>' +
    //        '<a href="#" class="btn btn-small" data-bind="click: ldrly.viewmodel.helper.hideStatus">×</a>' +
    //'<button type="button" class="close" data-hide="alert" data-bind="click: ldrly.viewmodel.helper.hideStatus">×</button>' +
    '<button type="button" class="close" data-hide="closable" data-bind="click: ldrly.viewmodel.helper.hideStatus">×</button>' +
    '<h4 class="alert-heading">Success!</h4>' +
    '<p id="success-alert-msg">The operation has performed successfully.</p>' +
    '</div>' +

    '</div>';

/*            Global LDRLY Template
 ================================================== */

/* Global Mustache template for LDRLY */

ui.template.global.style =
    "<!-- Global Styles-->" +
    "{{#global.style}}" +
    "<link href='{{{href}}}' rel='{{rel}}' media='{{media}}'>" +
    "{{/global.style}}" +
    "<!-- /Global Styles-->" +
    "<!-- Local Styles-->" +
    "{{#style}}" +
    "<link href='{{{href}}}' rel='{{rel}}' media='{{media}}'>" +
    "{{/style}}" +
    "<!-- /Local Styles-->";

ui.template.global.page.head =
    "<head>" +
    "<title>{{title}}</title>" +
    "<link rel='shortcut icon' href='/img/favicon/ldrly_ico.ico' type='image/x-icon' />" +
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
    "<meta http-equiv='Content-Type' content='text/html;charset=utf-8'>" +
    ui.template.global.style +
    "</head>";

ui.template.global.menuNoStatus =
    '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">' +
    '<div class="container-fluid>' +
    '<div class="navbar-header">' +
    '<!-- Responsive Navbar Part 1: Button for triggering responsive navbar.  -->' +
    '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">' +
//                    '<span class="sr-only">Toggle navigation</span>' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '</button>' +
    '<a class="navbar-brand ldrly-logo" href="#">' +
    '<img src="{{{global.project.icon}}}"> ' +
//                            '{{global.project.acronym}}' +
    '</a>' +
    '<!-- Responsive Navbar Part 2: Place all navbar contents you want collaposed within .navbar-collapse.collapse -->' +
    '<div class="collapse nav-collapse">' +
    '<ul class="nav navbar-nav pull-right"> ' +
    '{{#menu}}' +
    '<li class="{{active}}"><a href="{{url}}"><i class="{{icon}}"></i>{{name}}</a></li>' +
    '{{/menu}}' +
    '</ul> ' +
    '</div><!--/.nav-collapse -->' +
    '</div>' +
    '</div> <!--/container-->' +
    '</div>';


ui.template.global.footer =
    '<div class="footer navbar navbar-fixed-bottom">' +
    '<p class="text-center">&copy; LDRLY - Leaderboard (<a href="http://ldrly.geekatron.org">LDRLY</a>) ' +
    '2014' +
    '</p>' +
    '</div>';

ui.template.global.modal.template =
    '<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>' +
    '<h3 id="myModalLabel">Concept Properties</h3>' +
    '</div>' +
    '<div class="modal-body">' +
    '<p>Body content here....</p>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>' +
    '<button class="btn btn-primary">Save Changes</button>' +
    '</div>' +
    '</div>';

ui.template.global.modal.error.xhr =
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>' +
    '<h3 id="viewModalLabel">ERROR!</h3>' +
    '</div>' +

    '<div class="modal-body">' +
    //Table of properties for LDRLY
    '<div class="container-fulid">' +
    '<div class="row-fluid">' +
    '<div class="span3"> Status Code: </div>' +
    '<div class="span9"> {{status}} </div>' +
    '</div>' +
    '<div class="row-fluid">' +
    '<div class="span3"> Status Message: </div>' +
    '<div class="span9"> {{statusText}} </div>' +
    '</div>' +
    '<div class="row-fluid">' +
    '<div class="span3"> Response Message: </div>' +
    '<div class="span9"> {{responseText}} </div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button class="btn btn-warning" data-dismiss="modal" aria-hidden="true">Close</button>' +
    '</div>';

