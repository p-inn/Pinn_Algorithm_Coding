function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);
    for (let key of keyinput) {
      if (key === "up" && y < yLimit) y++;
      if (key === "down" && y > -yLimit) y--;
      if (key === "left" && x > -xLimit) x--;
      if (key === "right" && x < xLimit) x++;
    }
    return [x, y];
}