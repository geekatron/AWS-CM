/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 8:01 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ice, scp, scd */
"use strict";

/*  ===================================================
 TWO COLUMN Mustache template
 ==============================

 These templates are common for the following:
 -....
 =================================================== */

//Two Column Namespace declarations
ui.template.ldrly.layout.twocolumn = {};
ui.template.ldrly.layout.twocolumn.menu = {};
ui.template.ldrly.layout.twocolumn.modal = {};
ui.template.ldrly.layout.twocolumn.left = {};
ui.template.ldrly.layout.twocolumn.right = {};
ui.template.ldrly.layout.twocolumn.columns = {};
ui.template.ldrly.layout.twocolumn.content = {};
ui.template.ldrly.layout.twocolumn.head = {};
ui.template.ldrly.layout.twocolumn.body = {};
ui.template.ldrly.layout.twocolumn.page = {};

ui.template.ldrly.layout.twocolumn.left =
    "<div class='col-md-3 well'>" +
    "{{#behaviour}}" +
    "<h4>{{name}}</h4>" +
    "<hr class='min-hr'>" +
    "<ul>" +
    "{{#children}}" +
    "<li><a href='#' data-bind='{{action}}'>{{name}}</a></li>" +
    "{{/children}}" +
    "</ul>" +
    "{{/behaviour}}" +
    "</div>";
ui.template.ldrly.layout.twocolumn.right =
    "<div id='content' class='text-center col-md-9 well'>" +
    "<div class='page-header'>" +
    "<h1>{{title}} <small>({{acronym}})</small></h1>" +
    "</div>" +
    "{{#description}}" +
    "<p>{{.}}</p>" +
    "{{/description}}" +
    "</div>";

ui.template.ldrly.layout.twocolumn.columns =
    "<!DOCTYPE html>" +
    "<html>" +
    ui.template.ldrly.layout.twocolumn.left +
    ui.template.ldrly.layout.twocolumn.right +
    "</html>";

ui.template.ldrly.layout.twocolumn.content =
    "<div id='columns' class='container-fluid'>" +
    "<div class='row'>" +
    ui.template.ldrly.error +
    "</div>" +
    "<div class='row'>" +
    ui.template.ldrly.layout.twocolumn.columns +
    "</div>" +
    "</div>";

ui.template.ldrly.layout.twocolumn.head = ui.template.global.page.head;

ui.template.ldrly.layout.twocolumn.body =
    "<body>" +
    ui.template.global.menu +
    ui.template.ldrly.layout.twocolumn.content +
    ui.template.global.footer +
    "<!-- Global Libs-->" +
    "{{#global.libs}}" +
    "<script src='{{{src}}}'></script>" +
    "{{/global.libs}}" +
    "<!-- /Global Libs-->" +
    "<!-- Local Libs-->" +
    "{{#libs}}" +
    "<script src='{{{src}}}'></script>" +
    "{{/libs}}" +
    "<!-- /Local Libs-->" +
    "</body>";

ui.template.ldrly.layout.twocolumn.page =
    "<!DOCTYPE html>" +
    "<html>" +
    ui.template.ldrly.layout.twocolumn.head +
    ui.template.ldrly.layout.twocolumn.body +
    "</html>";

/*  =============================================
 Common element for ICE-M Layouts
 ============================================= */
ui.template.ldrly.libs =
    "<!-- Global Libs-->" +
    "{{#global.libs}}" +
    "<script src='{{{src}}}'></script>" +
    "{{/global.libs}}" +
    "<!-- /Global Libs-->" +
    "<!-- Local Libs-->" +
    "{{#libs}}" +
    "<script src='{{{src}}}'></script>" +
    "{{/libs}}";

