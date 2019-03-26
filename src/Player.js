import Game from './Game.js';

class Player {
  constructor(name) {
    this.name = name || 'Player';
    this.score = 0;
  }

  listPlayers(){
    game.currentPlayers.push(player);
  }

  scoreChange() {
    this.score = 100;
    console.log(this.score);
  }
}

export default Player;