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

//2.
function breadthFirstSearch(start, goal) {
  if (start.toString() === goal.toString()) return [start];

  const queue = [];
  const visited = new Set();

  queue.push({
    position: start,
    path: [start],
  });

  visited.add(start.toString());

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.position[0] === goal[0] && current.position[1] === goal[1]) {
      return current.path;
    }

    const moves = getKnightMoves(current.position);
    moves.forEach((move) => {
      const key = move.toString();

      if (visited.has(key)) return;

      visited.add(key);

      queue.push({
        position: move,
        path: [...current.path, move],
      });
    });
  }

  return null;
}
