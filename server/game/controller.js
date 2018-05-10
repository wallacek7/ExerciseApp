var express = require('express');
var Game = require('./model');

var app = express.Router();

var game = new Game();

module.exports = app
    .get('/quotes', (req, res) =>
    res.send( game.GetQuotes(req.query.playerId) ) 
    )
    .get('/workouts'), (req, res) =>
    res.send(game.GetWorkouts(req.query.playerId)
    )
    .get('/state', (req, res) => res.send(game))
    
    .post('/quotes', (req, res) => {
        console.log(req.body);
        
        game.SubmitQuote(req.body.Text, req.body.PlayerId);
        res.send( { success: true } );
    })