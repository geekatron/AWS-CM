/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 8:38 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint browser: true */
/*jslint devel: true */
/*jslint nomen: true */
/*global $, jQuery, _, ko, Mustache */
/*global ldrly */
'use strict';

ldrly.util = {};

ldrly.util.getURL = function () {
    this.URL = window.location;
    console.log("URL: " + this.URL);
};

/**
 *
 * @param id
 * @param scale - Currently accepts %
 */
ldrly.util.setSize = function(id, scale) {
    var myWidth;
    var myHeight;

    if( _.isUndefined(scale) ) {
        var scale =
        {
            height : 1 ,
            width : 1
        };
    }

    if( typeof( window.innerWidth ) == 'number' ) {

        //Non-IE

        myWidth = window.innerWidth;
        myHeight = window.innerHeight;

    } else if( document.documentElement &&

        ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {

        //IE 6+ in 'standards compliant mode'

        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;

    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {

        //IE 4 compatible

        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }

    myHeight = (myHeight - 5) * scale.height;
    myWidth = (myWidth - 5) * scale.width;
    document.getElementById(id).style.height = myHeight+'px';
    document.getElementById(id).style.width = myWidth+'px';
};

ldrly.util.setVideoSize = function(id, ele, scale) {
    var myWidth,
        myHeight,
        element;

    if( _.isUndefined(scale) ) {
        var scale =
        {
            height : 1 ,
            width : 1
        };
    }

    if( typeof( window.innerWidth ) == 'number' ) {

        //Non-IE

        myWidth = window.innerWidth;
        myHeight = window.innerHeight;

    } else if( document.documentElement &&

        ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {

        //IE 6+ in 'standards compliant mode'

        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;

    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {

        //IE 4 compatible

        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }

    myHeight = (myHeight - 5) * scale.height;
    myWidth = (myWidth - 5) * scale.width;

    if( !_.isUndefined(id) ) {
        element = document.getElementById(id);
    } else {
        element = ele;
    }

//    element.height = myHeight+'px';
//    element.width = myWidth+'px';

//    element.videoHeight = myHeight+'px';
//    element.videoWidth = myWidth+'px';

    element.height = myHeight;
    element.width = myWidth;

    element.videoHeight = myHeight;
    element.videoWidth = myWidth;

};

ldrly.util.connected = false;

ldrly.util.isOnline = function() {
    setTimeout(ldrly.util.isOnline, 5000);

    if (navigator.onLine){
        console.log('Internet connected!');

        //Check to see if it was disconnected
        if(ldrly.util.connected == false) {
            //Restart the application
            ldrly.util.restart();
        }

        ldrly.util.connected = true;

    } else {
        console.log('Internet disconnected!');
        ldrly.util.connected = false;
    }
};

ldrly.util.uuid = {};
ldrly.util.uuid.v4 = {};

/**
 * Create and return a "version 4" RFC-4122 UUID string.
 */
ldrly.util.uuid.v4.random = function randomUUID() {
    var s = [], itoh = '0123456789ABCDEF';

    // Make array of random hex digits. The UUID only has 32 digits in it, but we
    // allocate an extra items to make room for the '-'s we'll be inserting.
    for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);

    // Conform to RFC-4122, section 4.4
    s[14] = 4;  // Set 4 high bits of time_high field to version
    s[19] = (s[19] & 0x3) | 0x8;  // Specify 2 high bits of clock sequence

    // Convert to hex chars
    for (var i = 0; i <36; i++) s[i] = itoh[s[i]];

    // Insert '-'s
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
};

/**
 * Encoding & Decoding of UTF-8 strings
 */
ldrly.util.encode = function (data, callback) {
    var encoded = null;

    console.log('@encode');
    console.log(data);

    //Check to see if data has been provided
    if ( !_.isNull(data) && !_.isUndefined(data) ) {
        encoded = encodeURIComponent(data);
    } else {
        encoded = data;
    }

    //Check to see if synchronous or asynchronous operations
    if (_.isNull(callback) || _.isUndefined(callback) ) {
        return encoded;
    } else {
        callback(undefined, encoded);
    }

};

ldrly.util.decode = function (data, callback) {
    var decoded = data;

    console.log('@decode');
    console.log(data);

    //Check to see if data has been provided
    if ( !_.isNull(data) && !_.isUndefined(data) ) {
        if (_.indexOf(data, '%') > -1) {
            decoded = decodeURIComponent(data);
        }
    }

    //Check to see if synchronous or asynchronous operations
    if (_.isNull(callback) || _.isUndefined(callback) ) {
        return decoded;
    } else {
        callback(undefined, decoded);
    }
};

/**
 * Utitilites related to Date & Time
 */

ldrly.util.date = {};
ldrly.util.time = {};

ldrly.util.date.currentYear = function () {
    //Return the full date - 4 digits e.g. 2014
    return new Date().getFullYear();
};

/**
 * Hide & Show the left hand column
 */
ldrly.util.hide = {};
ldrly.util.show = {};

ldrly.util.hide.left = function () {
    $('#leftside').hide('slow', 'swing', function() {
//        $('hideColumn').hide('fast', 'swing');
//        $('expandColumn').show('fast', 'swing');

//        $('#leftside').removeClass('span3').addClass('span0');
        $('#contentData').removeClass('span9').addClass('span11');

//        $('#leftside').removeClass('span3').addClass('span1');
//        $('#contentData').removeClass('span9').addClass('span11');
    });

//    $('#leftside').animate({
//        left: "-=100",
//        easing : 'swing'
//        },
//        5000,
//        function() {
//            $('hideColumn').hide('fast', 'swing');
//            $('expandColumn').show('fast', 'swing');
//
//            $('#leftside').removeClass('span3').addClass('span1');
//            $('#contentData').removeClass('span9').addClass('span11');
//        }
//    );
};

ldrly.util.show.left = function() {
    $('#leftside').show('slow', 'swing', function() {
//        $('hideColumn').show('fast', 'swing');
//        $('expandColumn').hide('fast', 'swing');

//        $('#leftside').removeClass('span1').addClass('span3');
//        $('#contentData').removeClass('span11').addClass('span9');
//        $('#leftside').removeClass('span0').addClass('span3');
        $('#contentData').removeClass('span11').addClass('span9');
    });
};

ldrly.util.getUserFromSession = function() {
    var userprofile = jaaulde.utils.cookies.get('userprofile');
    userprofile = JSON.parse(userprofile.slice(2));
    return userprofile;
};

ldrly.util.getUseRoles = function() {
    //Retrieve the User Account details from the session
    var userprofile = jaaulde.utils.cookies.get('userprofile');
    userprofile = JSON.parse(userprofile.slice(2));
    return userprofile.role;
};

/**
 * Determine how to decode the data based on the element type.
 * @param type - Type of element, SPAN, DIV, etc.
 * @param element - The DOM element
 * @param value - The value to update.
 */
ldrly.util.determineDecodeElementAction = function (type, element, value) {
    //Use switch to handle the cases
    switch (type) {
        //Elements utilizing elementvalue
        case "input":
            element.value = value;
            break;
        case 'select':
            element.value = value;
            break;
        case 'textarea':
            element.value = value;
            break;
        //Elements utilizing element.innerHTML
        case 'a':
            element.innerHTML = value;
            break;
        case 'div':
            element.innerHTML = value;
            break;
        case 'em':
            element.innerHTML = value;
            break;
        case 'li':
            element.innerHTML = value;
            break;
        case 'span':
            element.innerHTML = value;
            break;
        case 'td':
            element.innerHTML = value;
            break;
    };
};

/* KNOCKOUT BINDINGS */

ko.bindingHandlers.decode = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
        console.log('@decodeHandlerInit');

        //2014.01.19 - Updating binding handler to update the innerHTML or value depending on the type of element
        var decoded = ldrly.util.decode(valueAccessor()),
            elemType = element.nodeName.toLowerCase();

        ldrly.util.determineDecodeElementAction(elemType, element, decoded);
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever the associated observable changes value.
        // Update the DOM element based on the supplied values here.
        console.log('@decodeHandlerUpdate');

        //2014.01.19 - Updating binding handler to update the innerHTML or value depending on the type of element
        var decoded = ldrly.util.decode(valueAccessor()),
            elemType = element.nodeName.toLowerCase();

        ldrly.util.determineDecodeElementAction(elemType, element, decoded);
    }
};