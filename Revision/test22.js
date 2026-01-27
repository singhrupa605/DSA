function burningTree(target, root) {
  let map = new Map(),
    queue = [root];
  let visited = new Set(),
    t = 0;

  while (queue.length) {
    let node = queue.pop();
    if (node.left) {
      map.set(node.left, node);
      queue.push(node.left);
    }
    if (node.right) {
      map.set(node.right, node);
      queue.push(node.right);
    }
  }
  queue = [target];
  while (queue.length) {
    let node = queue.shift();
    let parent = map.get(node);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    if (parent && !visited.has(parent)) {
      queue.push(parent);
    }
    visited.push(node);
    t++;
  }

  return t;
}
