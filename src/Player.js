import Game from './Game.js';
import index from './index.js';
import domUpdates from './domUpdates.js';

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  listPlayers(){
    game.currentPlayers.push(player);
  }

  scoreChangeUp(cardValue) {
    this.score += cardValue;
    domUpdates.updateScore(this);
  }

  scoreChangeDown(cardValue) {
    this.score -= cardValue;
    domUpdates.updateScore(this);
  }
}

export default Player;