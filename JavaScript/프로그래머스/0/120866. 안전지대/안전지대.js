function solution(board) {
  const n = board.length;
  const danger = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const ni = i + dx;
            const nj = j + dy;
            if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
              danger[ni][nj] = true;
            }
          }
        }
      }
    }
  }

  let safe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!danger[i][j] && board[i][j] === 0) safe++;
    }
  }

  return safe;
}
