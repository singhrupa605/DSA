
class Solution {
  dfs(node, vis, adj, result) {
    vis[node] = 1;
    for (let num of adj[node]) {
      if (!vis[num]) {
        this.dfs(num, vis, adj, result);
      }
    }

    result.push(node);
  }

  topoSort(V, edges) {
    let vis = new Array(V).fill(0);
    let adj = Array.from({ length: V }, () => []);
    for (let i = 0; i < edges.length; i++) {
      let u = edges[i][0];
      let v = edges[i][1];
      adj[u].push(v);
    }
    let stack = [];

    for (let i = 0; i < V; i++) {
      if (!vis[i]) {
        this.dfs(i, vis, adj, stack);
      }
    }
    let result = [];

    while (stack.length) {
      result.push(stack.pop());
    }
    return result;
  }
}
