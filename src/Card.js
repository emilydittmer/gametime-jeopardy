import data from './Game-Data.js';
import Game from './Game.js';
import Round from './Round.js';

class Card {
	constructor(answer, categoryId, pointValue, question) {
		this.answer = answer;
		this.categoryId = categoryId;
		this.pointValue = pointValue;
		this.question = question;
		this.isDailyDouble = false;
	}

	pickColumn(round) {
		const usefulQuestions = round.currentQuestions.push(this);
	}

}

export default Card;

