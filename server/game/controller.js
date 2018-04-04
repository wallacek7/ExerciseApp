var express = require('express')
var app = express.Router();

var Game = require('./model');

module.exports = app
    .get('/quotes', (req, res) => res.send(game.GetQuotes()))