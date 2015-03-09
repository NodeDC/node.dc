/* jslint node:true */
/*******************************************************************************
 * Serve JSON to our AngularJS client
 ******************************************************************************/

var request = require('request');

exports.meetups = function (req, res) {
    'use strict';
    var url = 'https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=node-dc&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=26710252&sig=dc51b92626c66cdedabf20d5c39aceb4720eb70a';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });
};
