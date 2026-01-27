const rightView = (root) => {
  if (!root) return [];
  let queue = [root];
  let ans = [];
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue[0]
      
      if (i === size - 1) {
        ans.push(node);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return ans;
};
