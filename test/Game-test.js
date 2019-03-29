import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import Round from '../src/Round.js';

describe('Game', function() {

  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should set defaults', function() {
    let game = new Game(1, 1, 0);

    expect(game.round).to.equal(1);
    expect(game.dailyDoubles).to.equal(1);
    expect(game.cardsClicked).to.equal(0);
    expect(game.roundOneCategories).to.deep.equal([]);
    expect(game.currentPlayers).to.deep.equal([]);
    expect(game.columnOne).to.deep.equal([]);
    expect(game.columnTwo).to.deep.equal([]);
    expect(game.columnThree).to.deep.equal([]);
    expect(game.columnFour).to.deep.equal([]);
    expect(game.isAnswered).to.equal(true);
    expect(game.currentPlayerIndex).to.equal(0);
  });

  it('should be able to get an array of player objects', function() {
    let game = new Game(1, 1, 0);
    game.getPlayerNames(['Bob', 'Frank', 'Billy']);
    expect(game.currentPlayers[0].name).to.equal('Bob');
  });

  it('should start at round one', function() {
    let game = new Game(1, 1, 0);
    let round = new Round(game);
    expect(round.round).to.equal(1);
  });

  it('should change player', function() {
    let game = new Game();
    expect(game.currentPlayerIndex).to.equal(0);
    game.changePlayer();
    expect(game.currentPlayerIndex).to.equal(1);
  })
});