import data from './Game-Data.js';
import domUpdates from './domUpdates.js';
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

  compareAnswers(cardValue) {
    let userInput = $("#user-answer").val().toLowerCase();
    let realAnswer = $(".answer").text().toLowerCase();
    if (realAnswer === userInput) {
      this.currentPlayers[this.currentPlayerIndex].scoreChangeUp(cardValue);
    } else {
      this.currentPlayers[this.currentPlayerIndex].scoreChangeDown(cardValue);
      this.changePlayer();
    }
    domUpdates.showAnswer();
    domUpdates.clearAnswerField();
    this.isAnswered = true;
  }

  changePlayer() {
    if (this.currentPlayerIndex === 0) {
      this.currentPlayerIndex = 1;
      domUpdates.changePlayers(this);
    } else if (this.currentPlayerIndex === 1) {
      this.currentPlayerIndex = 2;
      domUpdates.changePlayers(this);
    } else if (this.currentPlayerIndex === 2) {
      this.currentPlayerIndex = 0;
      domUpdates.changePlayers(this)
    }
  }
}

export default Game;