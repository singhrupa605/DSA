const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

const minPath = (arr) => {
  let dp = [],
    m = arr.length,
    n = arr[0].length;
  for (let i = 0; i < m; i++) {
    let a = Array(n);
    dp.push(a);
  }

  dp[0][0] = arr[0][0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + arr[0][i];
  }

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + arr[i][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + arr[i][j];
    }
  }
  return dp[m-1][n-1]
};

console.log(minPath(grid))
