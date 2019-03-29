import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Card from '../src/Card.js';
import domUpdates from '../src/domUpdates.js';
import data from '../src/Game-Data.js';
import Game from '../src/Game.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js';

chai.spy.on(domUpdates, [
	'updatePlayerNames',
	'appendCategoryNames',
	'loadQuestion',
	'updateScore',
	'showAnswer',
	'clearAnswerField',
	'changePlayers'
	], () => true);

describe('Card', function() {
	it('should return true', function() {
		expect(true).to.equal(true);
	});

	it('should have defaults', function() {
		let clue = {
      question: "question",
      pointValue: 100,
      answer: "answer",
      categoryId: 10
    };
		let card = new Card(clue);

		expect(card.question).to.equal("question");
		expect(card.pointValue).to.equal(100);
		expect(card.answer).to.equal("answer");
		expect(card.categoryId).to.equal(10);
	});

	it('should default to not a daily double', function() {
		let clue = {
      question: "question",
      pointValue: 100,
      answer: "answer",
      categoryId: 10
    };
		let card = new Card(clue);

		expect(card.isDailyDouble).to.equal(false);
	});

});