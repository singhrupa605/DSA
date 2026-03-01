function topoSort(V, edges) {
  let adj = Array.from({ length: V }, () => []);
  let indegerees = new Array(V).fill(0);

  for (let i = 0; i < edges.length; i++) {
    let u = edges[i][0];
    let v = edges[i][1];
    indegerees[v]++;
    adj[u].push(v);
  }

  let result = [];
  let queue = [],
    index = 0;
  for (let i = 0; i < indegerees.length; i++) {
    if (!indegerees[i]) {
      queue.push(i);
    }
  }
  while (index < queue.length) {
    let node = queue[index++]
    result.push(node)
     for(let num of adj[node])
     {
          indegerees[num]--
          if(indegerees[num]===0)
          {
            queue.push(num)
          }
     }
  }

  return result


}
