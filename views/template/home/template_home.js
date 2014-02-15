/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 7:59 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
"use strict";

/*  =============================================
 Mustache template for LDRLY Home Page
 ============================================= */

//ui.template.ldrly.home = {};
//ui.template.ldrly.home.page = ui.template.ldrly.layout.onecolumn.page;

ui.template.ldrly.home = {};
ui.template.ldrly.home.leaderboard = {};

ui.template.ldrly.home.leaderboard.result =
    '<!-- ko if: state() === 1 -->' +
    '<table class="table table-striped well">' +
    '<thead>' +
    '<tr>' +
    '<th class="text-center">Username</th>' +
    '<th class="text-center">Ranking</th>' +
    '<th class="text-center">Value</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody data-bind="foreach: leaderboard()">' +
    '<tr>' +
    '<td>' +
    '<div data-bind="text: username"></div>' +
    '</td>' +
    '<td>' +
    '<div data-bind="text: ranking"></div>' +
    '</td>' +
    '<td>' +
    '<div data-bind="text: value"></div>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '<!-- /ko -->';

ui.template.ldrly.home.leaderboard.userstats =
    '<!-- ko if: state() === 2 -->' +
    '<table class="table table-striped well">' +
    '<thead>' +
    '<tr>' +
    '<th>Stat Name</th>' +
    '<th>Stat Value</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody data-bind="foreach: userstats()">' +
    '<tr>' +
    '<td>' +
    '<div data-bind="text: name"></div>' +
    '</td>' +
    '<td>' +
    '<div data-bind="text: value"></div>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '<!-- /ko -->';

ui.template.ldrly.home.leaderboard.search =
    '<table class="table table-striped well">' +
    '<thead>' +
    '<tr class="text-center">' +
    '<th>Search by Username</th>' +
    '<th></th>' +
    '<th>Search by Stat Name</th>' +
    '<th></th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' +
    '<td>' +
    '<input id="username" type="text" class="form-control col-md-8" placeholder="e.g. player0" required="">' +
    '</td>' +
    '<td>' +
    '<button type="button" data-bind="click: retrieveUserStats" class="btn btn-default">' +
    '<span class="glyphicon glyphicon-user">Search</span>' +
    '</button>' +
    '</td>' +
    '<td>' +
    '<input id="statname" type="text" class="form-control col-xs-8" placeholder="e.g. wins" required="">' +
    '</td>' +
    '<td>' +
    '<button type="button" data-bind="click: retrieveLeaderboard" class="btn btn-primary">' +
    '<span class="glyphicon glyphicon-tower">Search</span>' +
    '</button>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>';

ui.template.ldrly.home.leaderboard.content =
    ui.template.ldrly.home.leaderboard.search +
    ui.template.ldrly.home.leaderboard.result +
    ui.template.ldrly.home.leaderboard.userstats;


ui.template.ldrly.home.column =
    "<div class='text-center'>" +
    "<div class='page-header'>" +
    "<h1>{{title}} <small>({{acronym}})</small></h1>" +
    "</div>" +
    "{{#description}}" +
    "<p>{{.}}</p>" +
    "{{/description}}" +
    ui.template.ldrly.home.leaderboard.content +
    "</div>";

ui.template.ldrly.home.content =
    "<script>" +
    "jQuery(document).ready(function(){" +
    '   var viewModel = new ldrly.viewmodel.Leaderboard(); ' +
    '   ko.applyBindings(viewModel); ' +
    '});' +
    "</script>" +
    "<div id='columns' class='container'>" +
    "<div class='row'>" +
    ui.template.ldrly.error +
    "</div>" +
    "<div class='row content home'>" +
    ui.template.ldrly.home.column +
    "</div>" +
    "</div>";

ui.template.ldrly.home.head = ui.template.global.page.head;

ui.template.ldrly.home.body =
    "<body>" +
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
    ui.template.global.menuNoStatus +
    ui.template.ldrly.home.content +
    ui.template.global.footer +
    "</body>";

ui.template.ldrly.home.page =
    "<!DOCTYPE html>" +
    "<html>" +
    ui.template.ldrly.home.head +
    ui.template.ldrly.home.body +
    "</html>";

