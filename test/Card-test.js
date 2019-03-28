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

describe('see if the tests are running', function() {
	it('should return true', function() {
		expect(true).to.equal(true);
	});

	it('should have a category', function() {
		let card = new Card('unitedStatesHistory');

		expect(card.category).to.equal('unitedStatesHistory');
	});

	it('should have question', function() {
		let card = new Card('Food', 'I have a question?');

		expect(card.question).to.equal('I have a question?');
	});

	it('should have an answer', function() {
		let card = new Card ('Food', 'I have a question?', 'I have an answer!');

		expect(card.answer).to.equal('I have an answer!');
	});

	it('should have a point value', function() {
		let card = new Card ('Food', 'I have a question?', 'I have an answer!', 100); 

		expect(card.pointValue).to.equal(100);
	});

	it('should default to not a daily double', function() {
		let card = new Card ();

		expect(card.isDailyDouble).to.equal(false);
	});
});