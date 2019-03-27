import $ from 'jquery';
import Game from './Game.js';
import index from './index.js';

export default {
  updatePlayerNames(names) {
      $(".player-one-name").text(names[0].name);
      $(".player-two-name").text(names[1].name);
      $(".player-three-name").text(names[2].name);
      $(".player-input").remove();
  },

  appendCategoryNames(game) {
    const fancyCategoryNames = [];
    game.roundOneCategories.forEach(category => {
      if (category.includes('unitedStatesHistory')) {
        fancyCategoryNames.push('United States History')
      } else if (category.includes('lifeSciences')) {
        fancyCategoryNames.push('Life Sciences')
      } else if (category.includes('publicHealth')) {
        fancyCategoryNames.push('Public Health')
      } else if (category.includes('educationJargon')) {
        fancyCategoryNames.push('Education Jargon')
      } else if (category.includes('nameThatBoardGame')) {
        fancyCategoryNames.push('Name That Board Game')
      } else if (category.includes('americanLiterature')) {
        fancyCategoryNames.push('American Literature')
      } else if (category.includes('biographies')) {
        fancyCategoryNames.push('Biographies')
      } else if (category.includes('americanCities')) {
        fancyCategoryNames.push('American Cities')
      } else if (category.includes('food')) {
        fancyCategoryNames.push('Food')
      } else {
        fancyCategoryNames.push('Cable TV')
      }
    });
      $(".category-one").text(fancyCategoryNames[0]);
      $(".category-two").text(fancyCategoryNames[1]);
      $(".category-three").text(fancyCategoryNames[2]);
      $(".category-four").text(fancyCategoryNames[3]);
  },

  loadQuestion(e, game) {
    $(e.target.className);

    let cardClicked =  e.target.className;
    let splitCardClicked = cardClicked.split('');
    let targetColumn;
    let targetRow;
    if (splitCardClicked[0] === 'a') {
      targetColumn = 'columnOne';
    } else if (splitCardClicked[0] === 'b') {
      targetColumn = 'columnTwo';
    } else if (splitCardClicked[0] === 'c') {
      targetColumn = 'columnThree';
    } else if (splitCardClicked[0] === 'd') {
      targetColumn = 'columnFour';
    }

    if (splitCardClicked[1] === '1') {
      targetRow = 0;
    } else if (splitCardClicked[1] === '2') {
      targetRow = 1;
    } else if (splitCardClicked[1] === '3') {
      targetRow = 2;
    } else if (splitCardClicked[1] === '4'){
      targetRow = 3;
    }

    $(`.${cardClicked}`).text(game[targetColumn][targetRow].question);
    game.isAnswered = false;

  }

 
 


    // $(".board").append(`<form class="user-answer">
    //     <label for="user-answer">Answer:</label>
    //     <input type="text" id="user-answer">
    //     <button for="user-answer" class="answer-submit">Submit</button></form>`

}

//click compare category[]
//.find() value

