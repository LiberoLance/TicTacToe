export function startGame(playerX, playerO) {
  const board = [];
  buildBoard();
}

export function buildBoard() {
  for(let i = 0; i < 9; i++) {
    board[i] = ' ';
  }
}
