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
	}

  getPlayerNames(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    });
    this.currentPlayers = players;
    domUpdates.updatePlayerNames(this.currentPlayers);

  }

  setRoundOne() {
    let newRound = new Round(this);
    newRound.setCategories(this);
    domUpdates.appendCategoryNames(this);
    newRound.createCards(this);
    newRound.sortQuestions(this);
  }

   compareAnswers(round) {
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
  console.log(true);
  // $("#user-answer").val('');
} else {
  console.log(false);
}

$("#user-answer").val('')
this.isAnswered = true;
  }
    //input answer is lower case
  //clue.answer is lower case
  //compare the values
    //if true-->score increments
    //if false-->score decrements
  //game.cardsClicked++
  //game.isanswered = true
  //switch players
}

export default Game;