console.log('Node ready 🚀');

//1.
function getKnightMoves([x, y]) {
  const offsets = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  return offsets
    .map(([dx, dy]) => [dx + x, dy + y])
    .filter(([newX, newY]) => newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7);
}
