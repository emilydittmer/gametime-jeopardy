import data from './Game-Data.js';
import Game from './Game.js';
import Round from './Round.js';

class Card {
	constructor(clue) {
		this.answer = clue.answer;
		this.categoryId = clue.categoryId;
		this.pointValue = clue.pointValue;
		this.question = clue.question;
		this.isDailyDouble = false;
	}

}

export default Card;

