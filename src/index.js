import $ from 'jquery';
import './css/base.css';
import './css/normalize.css';
import Game from './Game.js';
import domUpdates from './domUpdates.js';

const game = new Game;
const startBtn = $(".start");
const quitBtn = $(".quit")
const card = $(".col");
let answerSubmit = $(".answer-submit");
let cardValue;

startBtn.click(function(e) {
  e.preventDefault();
  const names = [$(".player-one-input").val(), $(".player-two-input").val(), $(".player-three-input").val()];
  const playerOneName = $(".player-one-name").css({"color": "blue", "font-size": "200%", "font-weight": "bold"})
  game.getPlayerNames(names);
  game.setRoundOne();
});

$('.board').click(function(e){
  cardValue = parseInt($(`h3.${e.target.classList[0]}`)[0].innerHTML);
});

card.click(function(e) {
  $(".current-answer").addClass("hidden");
  if (game.isAnswered) {
    setTimeout(function() {
      domUpdates.loadQuestion(e, game);

    $(".user-answer-form").removeClass("hidden");
    }, 100)
  }
});

answerSubmit.click(function(e) {
  e.preventDefault();
  let userInput = $("#user-answer").val().toLowerCase();
  let realAnswer = $(".answer").text().toLowerCase();
  game.compareAnswers(cardValue, userInput, realAnswer);
});

quitBtn.click(function() {
  location.reload (true);
});







