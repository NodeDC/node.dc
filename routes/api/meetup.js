/* jslint node:true */
/*******************************************************************************
 * Serve JSON to our AngularJS client
 ******************************************************************************/

var request = require('request');

var meetupApiKey = process.env.MEETUPAPIKEY || "test";

exports.meetups = function (req, res) {
    'use strict';
    var url = 'https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=node-dc&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&key=' + meetupApiKey;
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });
};
