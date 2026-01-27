function widthBT(root) {
  if (!root) return 0;
  let queue = [[root, 0]],
    maxWidth = 0,
    index = 0;
  while (queue.length) {
    let size = queue.length, rightIndex = 0, baseIdx = 0;
    for (let i = 0; i < size; i++) {
      let [node, idx] = queue[index]
      if (i === 0) {
        baseIdx = idx;
      }
      idx-=baseIdx; 
      if (i === size - 1) {
        rightIndex = idx;
      }
      if (node.left) {
        queue.push([node.left, 2 * idx]);
      }
      if (node.right) {
        queue.push([node.right, 2 * idx+1]);
      }
      index++;

    }
    maxWidth = Math.max(maxWidth, rightIndex+1)
    
  }
  return maxWidth
}
