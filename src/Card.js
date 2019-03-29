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

