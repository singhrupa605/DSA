class Solution {
  dfs(node, adj, vis, pathVis) {
    vis[node] = 1;
    pathVis[node] = 1;
    for (let num of adj[node]) {
      if (vis[num] && pathVis[num]) {
        return true;
      }
      if (!vis[num]) {
        if (this.dfs(num, adj, vis, pathVis)) {
          return true;
        }
      }
    }
    pathVis[node] = 0;

    return false;
  }
  isCyclic(V, edges) {

    let vis = new Array(V).fill(0);
    let pathVis = new Array(V).fill(0);
    let adj = Array.from({ length: V }, () => []);
    for (let i = 0; i < edges.length; i++) {
      let u = edges[i][0];
      let v = edges[i][1];
      adj[u].push(v);
    }

    for (let i = 0; i < V; i++) {
      if (!vis[i]) {
        if (this.dfs(i, adj, vis, pathVis)) {
          return true;
        }
      }
    }
    return false;
  }
}
