/* jslint node:true */
/*******************************************************************************
 * Module Dependencies
 ******************************************************************************/
var express = require('express');
var path = require('path');
var http = require('http');

var routes = require('./routes');

/*******************************************************************************
 * API Routes
 ******************************************************************************/
var home = require('./routes/api/home');
var meetup = require('./routes/api/meetup');
var irc = require('./routes/api/irc');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = module.exports = express();
var server = http.createServer(app);
var config = require('./config');

/*******************************************************************************
 * Configuration
 ******************************************************************************/
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/images/nodedc.png'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(require('connect-assets')({src:'public'}));

app.use(errorHandler()); // For Development Purposes Only
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
app.get('/api/irc', irc.messages);


/*******************************************************************************
 * Start Server
 ******************************************************************************/
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
