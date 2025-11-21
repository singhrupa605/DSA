const Queue = require("./queue");

//Pre-order Traversal (DFS)
var preOrder = function (root) {
  if (root === null) {
    return null;
  }
  console.log(root.value);
  preOrder(root.next);
  preOrder(root.right);
};

// Inorder Traversal
var inOrder = function (root) {
  if (root === null) {
    return null;
  }
  preOrder(root.next);
  console.log(root.value);
  preOrder(root.right);
};

// Level Order Traversal (BFS)

var levelOrder = function (root) {
  let queue = [root];
  if (!root) {
    return [];
  }
  let result = [];
  while (queue.length > 0) {
    let levelSize = queue.length;
    let temp = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      temp.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(temp);
  }
  return result;
};
