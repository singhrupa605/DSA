class Solution {
  goDfs(node, adj, visited, ans) {
    ans.push(node);
    visited[node] = 1;
    for (let val of adj[node]) {
      if (!visited[val]) {
        this.goDfs(val, adj, visited, ans);
      }
    }
  }

  dfs(adj) {
    let v = adj.length;
    let ans = [];
    let visited = new Array(v).fill(0);
    this.goDfs(0, adj, visited, ans);
    return ans;
  }
}
