/**
 * Created with WebStorm.
 * Date: 2/15/2014
 * Time: 8:28 AM
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
 View Model for Content Management
 ============================================= */
ldrly.viewmodel.ContentManagement = {};

/**
 * View models for the Interview Prep Profile.
 * @params args - Arguments expected by the constructor.
 *
 * @constructor
 */
ldrly.viewmodel.ContentManagement = function (args) {
    var self = this,
        err_msg = "";

    /* View related observables */
    self.state = ko.observable(0);
    self.simulate = ko.observable();

    self.stat = ko.observable(); //Store the Statistic Name
    self.username = ko.observable(); //Store the Username
    self.leaderboard = ko.observableArray(); //Store all the retrieved Company Profile Data
    self.userstats = ko.observableArray(); //Store the stats for the User

    /** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
     **            Private functionality/behaviours              **
     ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */


    /** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
     **             Helper functionality/behaviours              **
     ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */

    /** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
     **         Operations/behaviour to assist Views             **
     ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */


    /** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
     **         Operations/behaviour related to Leaderboard       **
     ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */
    self.retrieveLeaderboard = function (data) {
        var statname = $('#statname').val().toLocaleLowerCase();

        //Clear the error message
        //$('#err-msg').text('');
        //Show the status
        ldrly.viewmodel.helper.showStatus();

        function handleLeaderboard(err, data) {

            if (err) {
                console.error(err);
                //Show error message
                ldrly.viewmodel.helper.errorStatus('Error retrieving Leaderboard!');
            } else {
                //Show success message
                ldrly.viewmodel.helper.successStatus('Leaderboard Retrieved!!');
                //Set the leaderboard
                self.leaderboard = ko.observableArray(data);
                //Set the state to show the appropriate table
                self.state(1);
            }
        }//END handleLeaderboard

        //Check to make sure the statname is specified
        if (!_.isUndefined(statname) && !_.isNull(statname)) {
            if (statname.length > 0) {
                //Retrieve the leaderboard for the specified stat
                ldrly.integration.rest.stats.leaderboard(statname, handleLeaderboard);
            } else {
                ldrly.viewmodel.helper.errorStatus('Missing Stat Name!!');
            }
        } else {
            ldrly.viewmodel.helper.errorStatus('Missing Stat Name!!');
        }
    };

    self.retrieveUserStats = function (data) {
        var username = $('#username').val();

        //Clear the error message
        //$('#err-msg').text('');
        //Show the status
        ldrly.viewmodel.helper.showStatus();

        function handleUserStats(err, data) {
            if (err) {
                console.error(err);
                //Show error message
                ldrly.viewmodel.helper.errorStatus('Error retrieving user statistics!');
            } else {
                //Show success message
                ldrly.viewmodel.helper.successStatus('User statistics retrieved!!');

//                self.state(1);
                //Remove the previous data
                self.userstats.removeAll();

                //Set the data
                self.userstats(data);

                //Set the state to show the appropriate table
                self.state(2);
            }
        }//END handleLeaderboard

        //Check to make sure the username is specified
        if (!_.isUndefined(username) && !_.isNull(username)) {
            if (username.length > 0) {
                //Retrieve the stats for the specified username
                ldrly.integration.rest.stats.retrieve(username.toLocaleLowerCase(), handleUserStats);
            } else {
                ldrly.viewmodel.helper.errorStatus('Missing username!!');
            }

        } else {
            ldrly.viewmodel.helper.errorStatus('Missing username!!');
        }

    };


    /** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
     **                 Initialize the View Model                **
     ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */
    (function () {
        /* set the state of the view model */
        self.state(0);

        function initVM() {


        }//END document ready

        initVM();
    }());

};