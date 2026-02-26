class Solution {
  bfs(adj) {
    let v = adj.length;
    let visited = new Array(v).fill(0);

    let queue = [0],
      index = 0;
    visited[0] = 1;
    let ans = [];

    while (index < queue.length) {
      let node = queue[index];
      ans.push(node);
      index++;

      for (let i = 0; i < adj[node].length; i++) {
        let val = adj[node][i];
        if (visited[val] === 0) {
          queue.push(val);
          visited[val] = 1;
        }
      }
    }
    return ans;
  }
}
