var findCircleNum = function (isConnected) {
  let counter = 0,
    n = isConnected.length;
  let visited = new Array(n).fill(0);
  function dfs(node) {
    visited[node] = 1;
    for (let j = 0; j < n; j++) {
      if (isConnected[node][j] && !visited[j]) {
        dfs(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      counter++;
      dfs(i);
    }
  }
  return counter;
};
