/*! AWS-DAM - v0.0.1 - 2014-02-15
* Copyright (c) 2014 ; Licensed  */
/*jslint node: true */
/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
"use strict";

//ldrly.m.template = {};
var ui = {};
ui.template = {};
ui.template.ldrly = {};

ui.template.ldrly.error = {};

ui.template.global = {};
ui.template.global.modal = {};
ui.template.global.modal.error = {};

//EXPORT THE TEMPLATES
module.exports = ui.template;

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


/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
"use strict";

/*  =============================================
            Error Pages
 ============================================= */
ui.template.global.error = {};
ui.template.global.error.s404 = {};
ui.template.global.error.s500 = {};

ui.template.global.error.head = ui.template.global.page.head;

ui.template.global.error.s404.content =
    '<div class="container-fluid">' +
    '<div class="row pagination-centered">' +
    '<div class="err-title">{{error.404.title}}</div>' +

    '<div class="err-msg">' +
    '{{#error.404.message}}' +
    '<span>{{.}}</span>' +
    '{{/error.404.message}}' +
    '</div>' +
    '<ul class="err-msg">' +
    '{{#error.404.list}}' +
    '<li><span class="err-bullet">*  {{.}}</span></li>' +
    '{{/error.404.list}}' +
    '</ul>' +
    '<div class="err-msg">{{error.404.final}}</div>' +
    '<img class="err-img-right" src="/img/error/b_bwahaha.png">' +
    '</div>' +
    '</div>';
ui.template.global.error.s404.body =
    '<body id="error_page">' +
    ui.template.global.menuNoStatus +
    ui.template.global.error.s404.content +
//        ui.template.global.footer +
    '<!-- Global Libs-->' +
    '{{#global.libs}}' +
    '<script src="{{src}}"></script>' +
    '{{/global.libs}}' +
    '<!-- /Global Libs-->' +
    '<!-- Local Libs-->' +
    '{{#libs}}' +
    '<script src="{{src}}"></script>' +
    '{{/libs}}' +
    '<!-- /Local Libs-->' +
    '</body>';


ui.template.global.error.s404.page =
    '<!DOCTYPE html>' +
    '<html>' +
    ui.template.global.error.head +
    ui.template.global.error.s404.body +
    '</html>';

ui.template.global.error.s500.content =
    '<div class="container-fluid">' +
    '<div class="row pagination-centered">' +
    '<div class="err-title">{{error.500.title}}</div>' +

    '<div class="err-msg">' +
    '{{#error.500.message}}' +
    '<span>{{.}}</span>' +
    '{{/error.500.message}}' +
    '</div>' +
    '<ul class="err-msg">' +
    '{{#error.500.list}}' +
    '<li><span class="err-bullet">*  {{.}}</span></li>' +
    '{{/error.500.list}}' +
    '</ul>' +

    '<div class="err-msg">' +
    '<span>{{err}}</span>' +
    '</div>' +

    '<div class="err-msg">{{error.500.final}}</div>' +
    '<img class="err-img" src="/img/error/h_nerd.png">' +
    '</div>' +
    '</div>';
ui.template.global.error.s500.body =
    '<body id="error_page">' +
    ui.template.global.menuNoStatus +
    ui.template.global.error.s500.content +
//        ui.template.global.footer +
    '<!-- Global Libs-->' +
    '{{#global.libs}}' +
    '<script src="{{src}}"></script>' +
    '{{/global.libs}}' +
    '<!-- /Global Libs-->' +
    '<!-- Local Libs-->' +
    '{{#libs}}' +
    '<script src="{{src}}"></script>' +
    '{{/libs}}' +
    '<!-- /Local Libs-->' +
    '</body>';


ui.template.global.error.s500.page =
    '<!DOCTYPE html>' +
    '<html>' +
    ui.template.global.error.head +
    ui.template.global.error.s500.body +
    '</html>';

/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
"use strict";

/*  =============================================
 Layouts (Mustache template)for ldrly
 ============================================= */
//Layout Namespace declarations
if (!ui.template.ldrly) {
    ui.template.ldrly = {};
}
ui.template.ldrly.layout = {};


/*  ===================================================
 One COLUMN Mustache template
 ==============================

 This template is common for the following:
 - Home
 =================================================== */


//One Column Namespace declarations
ui.template.ldrly.layout.onecolumn = {};
ui.template.ldrly.layout.onecolumn.menu = {};
ui.template.ldrly.layout.onecolumn.modal = {};
ui.template.ldrly.layout.onecolumn.column = {};
ui.template.ldrly.layout.onecolumn.content = {};
ui.template.ldrly.layout.onecolumn.head = {};
ui.template.ldrly.layout.onecolumn.body = {};
ui.template.ldrly.layout.onecolumn.page = {};

ui.template.ldrly.layout.onecolumn.column =
//    "<div class='text-center span12 well'>" +
    "<div class='text-center col-md-12'>" +
    "<div class='page-header'>" +
    "<h1>{{title}} <small>({{acronym}})</small></h1>" +
    "</div>" +
    "{{#description}}" +
    "<p>{{.}}</p>" +
    "{{/description}}" +
    "</div>";

ui.template.ldrly.layout.onecolumn.content =
    "<div id='columns' class='container-fluid'>" +
    "<div class='row'>" +
    ui.template.ldrly.error +
    "</div>" +
    "<div class='row content home'>" +
    ui.template.ldrly.layout.onecolumn.column +
    "</div>" +
    "</div>";

ui.template.ldrly.layout.onecolumn.head = ui.template.global.page.head;

ui.template.ldrly.layout.onecolumn.body =
    "<body>" +
    ui.template.global.menuNoStatus +
    ui.template.ldrly.layout.onecolumn.content +
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

ui.template.ldrly.layout.onecolumn.page =
    "<!DOCTYPE html>" +
    "<html>" +
    ui.template.ldrly.layout.onecolumn.head +
    ui.template.ldrly.layout.onecolumn.body +
    "</html>";


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


/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache, ui */
/*global ldrly */
"use strict";

/*  =============================================
 Mustache template for DAM
 ============================================= */



ui.template.ldrly.content = {};
ui.template.ldrly.content.management = {};
ui.template.ldrly.content.management.concept= {};


ui.template.ldrly.content.management.concept.table = "";
ui.template.ldrly.content.management.concept.list = "";

ui.template.ldrly.content.management.griditemimg = "";
ui.template.ldrly.content.management.griditemvid = "";
ui.template.ldrly.content.management.griditemtxt = "";

ui.template.ldrly.content.management.grid = "";