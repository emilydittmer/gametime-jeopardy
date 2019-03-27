import Game from './Game.js';
import index from './index.js';

class Player {
  constructor(name) {
    this.name = name || 'Player';
    this.score = 0;
  }

  listPlayers(){
    game.currentPlayers.push(player);
  }

  scoreChangeUp(cardValue) {
    this.score += cardValue;

  }

  scoreChangeDown(cardValue) {
    // console.log(cardValue);
    this.score -= cardValue;
    // console.log(this.score);
  }
}

export default Player;