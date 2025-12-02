var zigzagLevelOrder = function (root) {
  let queue = [root],
    result = [],
    flag = 0;
  if (!root) return [];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let temp = [];
    for (let i = 0; i < levelSize; i++) {
      let popped = queue.shift();
      if (flag === 0) {
        temp.push(popped.val);
      } else {
        temp.unshift(popped.val);
      }
      if (popped.left) {
        queue.push(popped.left);
      }
      if (popped.right) {
        queue.push(popped.right);
      }
    }
    flag = flag === 1 ? 0 : 1;
    result.push(temp);
  }
  return result;
};
