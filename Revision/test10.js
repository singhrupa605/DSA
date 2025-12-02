const maxLevelSum = (root) => {
    if(!root) return 0;
  let queue = [root],
    level = 1,
    ans = 0,
    maxSum = -Infinity;
  while (queue.length > 0) {
    let sum = 0;
    let levelSize = queue.length;
  
    for (let i = 0; i < levelSize; i++) {
          let popped = queue.shift();
          sum += popped.val;
      if (popped.left) {
        queue.push(popped.left);
      }
      if (popped.right) {
        queue.push(popped.right);
      }
    }
    if (sum > maxSum) {
      ans = level;
      maxSum = sum;
    }
    level++;
  }
  return ans;
};
