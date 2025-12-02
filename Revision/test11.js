const vertical = (root) => {
  if (!root) return [];
  let map = new Map();
  let result = [];
  let queue = [{ node: root, col: 1 }];
  while (queue.length > 0) {
    let front = queue.shift();
    const { node, col } = front;
    if (!map.get(col)) {
      map.set(col, []);
    }
    map.get(col).push(node);

    if (node.left) {
      queue.push({ node: node.left, col: col - 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, col: col + 1 });
    }
  }

  [...map.entries()].sort((a, b) => a[0] - b[0]).forEach((obj) => {
     result.push(obj[1])
  });

  return result;
};
