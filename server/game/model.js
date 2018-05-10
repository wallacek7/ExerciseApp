var axios = require("axios");

const QuotesStack =  [
    ];
    const Workouts = [
        {id: 1, exercise: 'Running', duration: '30', notes: '3mi'}
    ];
var iCurrentPicture = 0;

function Game() {
    this.Players = [];
    this.GetQuotes = (playerId) => {
        if(this.Players.some(x=> x.PlayerId == playerId)){
        }else{
            this.Players.push({ PlayerId: playerId, Name: playerId });  
        }
    }
}

module.exports = Game;