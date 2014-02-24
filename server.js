/* jslint node:true */
/*******************************************************************************
 * Module Dependencies
 ******************************************************************************/
var express = require('express');
var routes = require('./routes');
var path = require('path');

/*******************************************************************************
 * APIs
 ******************************************************************************/
var home = require('./routes/api/home');
var meetup = require('./routes/api/meetup');


var app = module.exports = express();
var http = require('http');
var server = http.createServer(app);
var socketio = require('socket.io').listen(server, {log: false});
var config = require('./config');

/*******************************************************************************
 * Configuration
 ******************************************************************************/
app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(require('connect-assets')({src:'public'}));
app.use(app.router);
app.use(express.errorHandler()); // For Development Purposes Only
app.locals.pretty = true; // For Development Purposes Only

/*******************************************************************************
 * Routes
 ******************************************************************************/

// Serve Index and View Partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', home.name);
app.get('/api/meetups', meetup.meetups);


/*******************************************************************************
 * Start Server
 ******************************************************************************/
server.listen(app.get('port'), function () {
    'use strict';
    console.log('Express server listening on port ' + app.get('port'));
});

require('./routes/api/irc/irc')(config, socketio);

