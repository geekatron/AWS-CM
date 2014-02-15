/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 7:56 AM
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
