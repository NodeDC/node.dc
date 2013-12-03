/* jslint node:true */
/*******************************************************************************
 * Module Dependencies
 ******************************************************************************/
var express = require('express');
var routes = require('./routes');
var api = require('./routes/api');
var path = require('path');

var app = module.exports = express();

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
app.use(express.static(path.join(__dirname, 'public')));
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
app.get('/api/name', api.name);

// Redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/*******************************************************************************
 * Start Server
 ******************************************************************************/
app.listen(app.get('port'), function () {
    'use strict';
    console.log('Express server listening on port ' + app.get('port'));
});
