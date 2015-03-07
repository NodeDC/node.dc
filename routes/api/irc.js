/* jslint node:true */
/*******************************************************************************
 * Serve JSON to our AngularJS client
 ******************************************************************************/

var request = require('request');

exports.messages = function (req, res) {
    'use strict';
    var url = 'http://node-dc-irc.herokuapp.com/messages';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });
};
