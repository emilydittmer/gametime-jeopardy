// import Player from './Player.js';
import data from './Game-Data.js';
import domUpdates from './domUpdates.js';
import index from './index.js';
import Player from './Player.js';
import Round from './Round.js';
import Card from './Card.js';
import $ from 'jquery';

class Game {
	constructor(round, dailyDoubles, cardsClicked) {
		this.round = 1;
		this.dailyDoubles = 1;
		this.cardsClicked = 0;
		this.roundOneCategories = [];
    this.currentPlayers = [];
    this.columnOne = [];
    this.columnTwo = [];
    this.columnThree = [];
    this.columnFour = [];
    this.isAnswered = true;
    this.currentPlayerIndex = 0;
    this.playing = 1;
	}

  getPlayerNames(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    });
    this.currentPlayers = players;
    domUpdates.updatePlayerNames(this.currentPlayers);
    console.log(players);
  }

  setRoundOne() {
    let newRound = new Round(this);
    newRound.setCategories(this);
    domUpdates.appendCategoryNames(this);
    newRound.createCards(this);
    newRound.sortQuestions(this);
  }

  // changeScore(cardValue) {
  //   this.currentPlayers[0].scoreChange(cardValue);
  // }

  compareAnswers(cardValue) {
    let userInput = $("#user-answer").val().toLowerCase();
    const allAnswers = [];
    this.columnOne.forEach((clue) => {
      allAnswers.push(clue.answer.toLowerCase())
    });
    this.columnTwo.forEach((clue) => {
      allAnswers.push(clue.answer.toLowerCase())
    });
     this.columnThree.forEach((clue) => {
      allAnswers.push(clue.answer.toLowerCase())
    });
      this.columnFour.forEach((clue) => {
      allAnswers.push(clue.answer.toLowerCase())
    });
    if (allAnswers.includes(userInput)) {
      this.currentPlayers[this.currentPlayerIndex].scoreChangeUp(cardValue);
    } else {
      this.currentPlayers[this.currentPlayerIndex].scoreChangeDown(cardValue);
      this.changePlayer();
    }
    $("#user-answer").val('');
    this.isAnswered = true;
  }

  changePlayer() {
    if (this.currentPlayerIndex === 0) {
      this.currentPlayerIndex = 1;
      $(".player-two-name").css({"color": "blue", "font-size": "200%", "font-weight": "bold"});
      $(".player-one-name").css({"color": "", "font-size": "", "font-weight": ""});
    } else if (this.currentPlayerIndex === 1) {
      this.currentPlayerIndex = 2;
      $(".player-three-name").css({"color": "blue", "font-size": "200%", "font-weight": "bold"});
      $(".player-two-name").css({"color": "", "font-size": "", "font-weight": ""});
    } else if (this.currentPlayerIndex === 2) {
      this.currentPlayerIndex = 0;
      $(".player-one-name").css({"color": "blue", "font-size": "200%", "font-weight": "bold"});
      $(".player-three-name").css({"color": "", "font-size": "", "font-weight": ""});
    }
  }

  makeDailyDouble(clue) {
    this.cardsClicked++
    // console.log(clue);
    // if(this.cardsClicked === 5) {

    }
  
  //if true-->score increments
  //if false-->score decrements
  //game.cardsClicked++
  //game.isanswered = true
  //switch players
}

export default Game;