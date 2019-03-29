class Card {
  constructor(answer, categoryId, pointValue, question) {
    this.answer = answer;
    this.categoryId = categoryId;
    this.pointValue = pointValue;
    this.question = question;
    this.isDailyDouble = false;
  }

  pickColumn(round) {
    round.currentQuestions.push(this);
  }
}

export default Card;

