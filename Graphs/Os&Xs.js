/**
 * @param {character[][]} grid
 * @returns {void}
 */

class Solution {
  fill(grid) {
    // Code here
    let m = grid.length,
      n = grid[0].length;
    let visited = Array.from({ length: m }, () => Array(n).fill(0));
    let queue = [],
      index = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (
          (i === 0 || j === 0 || i === m - 1 || j === n - 1) &&
          grid[i][j] === "O"
        ) {
          queue.push([i, j]);
          visited[i][j] = 1;
        }
      }
    }
    const directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    while (index < queue.length) {
      let [row, col] = queue[index++];
      for (let [dr, dc] of directions) {
        const r = row + dr,
          c = col + dc;

        if (
          r < m &&
          r >= 0 &&
          c < n &&
          c >= 0 &&
          !visited[r][c] &&
          grid[r][c] === "O"
        ) {
          visited[r][c] = 1;
          queue.push([r, c]);
        }
      }
    }

    for (let i = 1; i < m - 1; i++) {
      for (let j = 1; j < n - 1; j++) {
        if (!visited[i][j] && grid[i][j] === "O") {
          grid[i][j] = "X";
        }
      }
    }
  }
}
