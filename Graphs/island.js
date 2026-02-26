/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let m = grid.length,
    n = grid[0].length,
    count = 0;
  let visited = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] !== "0") {
        bfs(i, j, visited, m, n, grid);
        count++;
      }
    }
  }

  return count;
};

function isValid(m, n, r, c) {
  return r >= 0 && c >= 0 && r < m && c < n;
}
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
function bfs(row, column, visited, m, n, grid) {
  let queue = [[row, column]];
  visited[row][column] = 1;
  let index = 0;
  while (index < queue.length) {
    let [r, c] = queue[index];
    index++;

    for (let [dr, dc] of directions) {
      const nr = dr + r;
      const nc = dc + c;
      if (
        isValid(m, n, nr, nc) &&
        grid[nr][nc] === "1" &&
        visited[nr][nc] === 0
      ) {
        queue.push([nr, nc]);
        visited[nr][nc] = 1;
      }
    }
  }


  function dfs(row, column, visited, m, n, grid) {;
   visited[row][column] = 1;
    for (let [dr, dc] of directions) {
      const nr = dr + r;
      const nc = dc + c;
      if (
        isValid(m, n, nr, nc) &&
        grid[nr][nc] === "1" &&
        visited[nr][nc] === 0
      ) {
        dfs(nr,nc,visited,m,n,grid)
      }
    }
  }
}
