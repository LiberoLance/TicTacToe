import { startGame, buildBoard } from './modules/startGame.js';

function player(name) {
  this.name = name;
  let score = 0;
  
  const win = () => score++;
  const getName = () => name;
  const getScore = () => score;
  
  return {getName, getScore, win};
}

const playerX = player('x');
console.log(playerX.getName() + ' ' + playerX.getScore());
