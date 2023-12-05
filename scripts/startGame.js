function startGame(playerX, playerO) {
  const board = [];
  buildBoard();
}

function buildBoard() {
  for(let i = 0; i < 9; i++) {
    board[i] = ' ';
  }
}
