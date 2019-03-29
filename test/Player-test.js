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

describe('Player', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a name', function() {
    let player = new Player('Lauren');

    expect(player.name).to.equal('Lauren');
  });

  it('should have a default score', function() {
    let player = new Player('Lauren');

    expect(player.score).to.equal(0);
  });

  it('the score should increment', function() {
    let player = new Player ('Lauren');
    expect(player.score).to.equal(0);
    player.scoreChangeUp(100)
    expect(player.score).to.equal(100);
  });

    it('the score should decrement', function() {
    let player = new Player ('Lauren');
    expect(player.score).to.equal(0);
    player.scoreChangeDown(100)
    expect(player.score).to.equal(-100);
  });
});
