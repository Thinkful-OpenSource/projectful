require('./db/connect');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan       = require('morgan');
var app = express();
app.use(morgan('dev')); // log every request to the console

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(8080, function() {
    console.log('Listening on port 8080');
});

exports.app = app;