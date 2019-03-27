// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// // An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';
import './css/normalize.css';
// import Data from './Game-Data.js';
import Game from './Game.js';
import domUpdates from './domUpdates.js';
// import Player from './Player.js';
// import Card from './Card.js';

const game = new Game;
const startBtn = $(".start");
const card = $(".col");
let answerSubmit = $(".answer-submit");

const cardValue = $('.board').click(function(e){
  let cardValue = parseInt($(`h3.${e.target.classList[0]}`)[0].innerHTML);
  console.log(cardValue);
  // return cardValue;
});


startBtn.click(function(e) {
  e.preventDefault();
  const names = [$(".player-one-input").val(), $(".player-two-input").val(), $(".player-three-input").val()];
  game.getPlayerNames(names);
  game.setRoundOne();
});

card.click(function(e) {
  if (game.isAnswered) {
    setTimeout(function() {
      domUpdates.loadQuestion(e, game);
    $(".user-answer-form").removeClass("hidden");
    }, 100)
  }
});

answerSubmit.click(function(e, cardValue) {
  e.preventDefault();
  game.compareAnswers(cardValue);
  console.log(cardValue);
})

