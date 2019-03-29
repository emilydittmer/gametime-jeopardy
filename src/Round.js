import Game from './Game.js';
import data from './Game-Data.js';
import Card from './Card.js';
import Round from './Round.js';

class Round {
	constructor(game) {
		this.round = 1;
		this.allCategoryNames = [];
		this.currentCategories = [];
        this.currentQuestions = [];
	}

	setCategories(game) {
        const categoryData = Object.entries(data.categories);
		Array.prototype.shuffle = function() {
        var input = this;    
            for (var i = input.length-1; i >= 0; i--) {
                var randomIndex = Math.floor(Math.random()*(i+1)); 
                var categoryAtIndex = input[randomIndex]; 
                input[randomIndex] = input[i]; 
                input[i] = categoryAtIndex;
        }
        return input;
        }
        let shuffledCategories = categoryData.shuffle();
        this.allCategoryNames.push(shuffledCategories);
        let currentCategories = shuffledCategories.splice(6,5);
        let firstRound = currentCategories.forEach((category) =>
    	   game.roundOneCategories.push(category));
	}

    createCards(game) {
        const roundOneClues = [];
        game.roundOneCategories.forEach(category => {
            const matchingClues = data.clues.filter(clue => {
                if (clue.categoryId === category[1]) {
                roundOneClues.push(clue);
                }
                return roundOneClues;
            });
            roundOneClues.forEach(clue => {
            let answer = clue.answer;
            let categoryId = clue.categoryId;
            let pointValue = clue.pointValue;
            let question = clue.question
            var newCard = new Card(answer, categoryId, pointValue, question);
            newCard.pickColumn(this);
            return newCard
            });   
        });
    }

    sortQuestions(game) {
        this.currentQuestions.forEach(question => {
            if (game.columnFour.length === 4 && game.columnOne.length === 4 && game.columnTwo.length === 4 && game.columnThree.length === 4) {
                return;
            }
            if (question.categoryId === game.roundOneCategories[0][1]) {
                if(!this.checkForUniqueValue(game.columnOne, question)) {
                    game.columnOne.push(question);
                }
            } else if (question.categoryId === game.roundOneCategories[1][1]) {
                if(!this.checkForUniqueValue(game.columnTwo, question)) {
                    game.columnTwo.push(question);
                }
            } else if (question.categoryId === game.roundOneCategories[2][1]) {
                if(!this.checkForUniqueValue(game.columnThree, question)) {
                    game.columnThree.push(question);
                }
            } else {
                if(!this.checkForUniqueValue(game.columnFour, question)) {
                    game.columnFour.push(question);
                }
            }
        });
    }

    checkForUniqueValue(column, question) {
        return column.find(card => {
            return card.pointValue === question.pointValue;
        });
    }
}

export default Round;