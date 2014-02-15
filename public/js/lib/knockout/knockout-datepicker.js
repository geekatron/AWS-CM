/**
 * Created with JetBrains WebStorm.
 * User: ali
 * Date: 20/07/13
 * Time: 8:48 PM
 * To change this template use File | Settings | File Templates.
 */

//ko.bindingHandlers.datepicker = {
//    init: function (element, valueAccessor, allBindingsAccessor) {
//        //initialize datepicker with some optional options
//        var options = allBindingsAccessor().datepickerOptions || {};
//        $(element).datepicker(options).on("changeDate", function (ev) {
//            var observable = valueAccessor();
//            observable(ev.date);
//        });
//    },
//    update: function (element, valueAccessor) {
//        var value = ko.utils.unwrapObservable(valueAccessor());
//        $(element).datepicker("setValue", value);
//    }
//};