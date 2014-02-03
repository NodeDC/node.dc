/* jslint node:true */
/*******************************************************************************
 * Serve JSON to our AngularJS client
 ******************************************************************************/

var request = require('request');

exports.meetups = function (req, res) {
    'use strict';
    var url = 'http://api.meetup.com/2/events?status=upcoming&order=time&limited_events=False&group_urlname=node-dc&desc=false&member_id=26710252&offset=0&format=json&page=20&fields=&sig_id=26710252&sig=f9a8c7e4076e5ed5825f06378a855415af3722a9';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });
};