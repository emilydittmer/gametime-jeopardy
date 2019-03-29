import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Card from '../src/Card.js';
import domUpdates from '../src/domUpdates.js';

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
    let card = new Card('answer', 10, 100, 'question');

    expect(card.answer).to.equal('answer');
    expect(card.categoryId).to.equal(10);
    expect(card.pointValue).to.equal(100);
    expect(card.question).to.equal('question');
  });

  it('should default to not a daily double', function() {
    let card = new Card('answer', 10, 100, 'question');
    expect(card.isDailyDouble).to.equal(false);
  });

});