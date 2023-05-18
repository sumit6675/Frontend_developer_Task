function checkWinner(board) {
    const winningPatterns = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    return null;
  }
  const board = [
    "X", null, "O",
    null, "X", "O",
    "X", null, "X"
  ];
  
  const winner = checkWinner(board);
  
  if (winner) {
    console.log(`The winner is ${winner}!`);
  } else {
    console.log("It's a tie!");
  }
  
  