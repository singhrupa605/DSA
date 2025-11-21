const Queue = require("../Trees/queue");

const levelOrder = (root) => {
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let temp = [];
    let queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      let node = queue.shift();
      temp.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(temp);
  }
};
