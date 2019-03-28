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

// chai.spy.on(domUpdates, [
//   'updatePlayerNames',
//   'appendCategoryNames',
//   'loadQuestion',
//   'updateScore',
//   'showAnswer',
//   'clearAnswerField',
//   'changePlayers'
//   ], () => true);

describe('Game', function() {

	it('should return true', function() {
		expect(true).to.equal(true);
	});

	it('should set defaults', function() {
		let game = new Game(1, 1, 0);

		expect(game.round).to.equal(1);
		expect(game.dailyDoubles).to.equal(1);
		expect(game.cardsClicked).to.equal(0);
	});
});