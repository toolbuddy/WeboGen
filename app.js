/* Babel ES6/JSX compiler */
require('babel-register');

/* Node modules */
const async = require('async');
const bodyParser = require('body-parser');
const colors = require('colors');
const compression = require('compression');
const express = require('express');
const fs = require('fs');
const logger = require('morgan');
const http = require('http');
const https = require('https');
const path = require('path');
const request = require('request');
const swig = require('swig');
const xml2js = require('xml2js');
const _ = require('underscore');

/* React modules */
const React = require('react');
const ReactDOM = require('react-dom/server');
const Router = require('react-router');

/* Server cores */
//var config = require('./config');
const Routes = require('./app/routes');

/* Create Express app */
const app = express();

/* Redirect views path */
app.set('views', path.join(__dirname, 'client/views'));

/* Express app settings */
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/* Setting static directory */
app.use(express.static(__dirname + '/client/js/'));
app.use(express.static(__dirname + '/client/css/'));
app.use(express.static(__dirname + '/client/img/'));
app.use(express.static(__dirname + '/client/fonts/'));
app.use(express.static(__dirname + '/client/files/'));

app.use(function(req, res) {
    Router.match({
        routes: Routes.default,
        location: req.url
    }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500)
                .send(err.message);
        } else if (redirectLocation) {
            res.status(302)
                .redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('client/views/index.html', {
                html: html
            });
            res.status(200)
                .send(page);
        } else {
            res.status(404)
                .send('Page Not Found');
        }
    });
});

/* Error message */
app.use(function(err, req, res, next) {
    console.log(err.stack.red);
    res.status(err.status || 500);
    res.send({
        message: err.message
    });
});

/* Create server */
/*const server_config = {
    key: fs.readFileSync('/etc/letsencrypt/live/nss.cs.nctu.edu.tw/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/nss.cs.nctu.edu.tw/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/nss.cs.nctu.edu.tw/chain.pem')
};
const server = https.createServer(server_config, app);*/
const server = http.createServer(app);

/* Setup sever listening at specific port */
server.listen(process.env.npm_package_config_port, function() {
    console.log('NSSLAB Website server listening at port ' + process.env.npm_package_config_port);
});