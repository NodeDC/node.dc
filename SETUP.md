# Setup of Node.dc Community Website

## How to get it running
This is a quick how-to to get the website running locally.

Check Node/NPM versions:

    $ node --version
    v0.10.22
    $ npm --version
    1.3.14

Install required packages:

    $ npm install

Serve website:

    $ node server.js
    Express server listening on port 3000

## Development Ideas

### Bower
We have added `bower` as a development dependency and we can get new versions of `jQuery`, `Bootstrap`, and `Angular` easily through `bower install`.

Once that command is run, the updated versions of the libraries will be found in `public/lib/`. Just overwrite the appropriate files:

    $ cp -r public/lib/bootstrap/dist/ public/
    $ cp -r public/lib/jquery/jquery.min.js public/js/
    $ cp -r public/lib/angular/angular.min.js public/js/
    $ cp -r public/lib/angular-route/angular-route.min.js public/js/

### Going Forward
This website is leveraging both [Node.js](http://nodejs.org) and [Angular.js](http://angularjs.org/). Node.js will be used for an API interface to Angular.js so that we can use both of these technologies to their full advantages. 

Currently, in `routes/api.js` we have a simple "API" call returning a name to use within the Angular.js partials. In the future, all APIs will be written in Node.js feeding the Angular.js app.

The Node.js views and Angular.js partials are all written using the templating language [Jade](http://jade-lang.com/).