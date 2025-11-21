const TreeNode = require("./represent");

const preOrder = (root) => {
  let stack = [],
    result = [];
  if (root === null) {
    return [];
  }
  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    result.push(node.value);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
};

var inorderTraversal = function (root) {
  let stack = [];
  let result = [];
  let current = root;
  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
// TWO Stacks
var postOrderTraversal = function (root) {
  let stack1 = [];
  let stack2 = [];
  let result = [];
  stack1.push(root);
  while (stack1.length > 0) {
    let node = stack1.pop();
    if (node.left) {
      stack1.push(node.left);
    }
    if (node.right) {
      stack1.push(node.right); 
    }
    stack2.push(node.val);
  }
  while (stack2.length > 0) {
    result.push(stack2.pop());
  }
  return result;
};

// One Stack
var postOrderTraversal = function (root) {
  let stack = [];
  let result = [];
  let lastVisited = null;
  let curr = root;
  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    let top = stack[stack.length - 1];
    if (top.right !== null && lastVisited !== top.right) {
       curr = top.right
    }
    else
    {
      let processed  = stack.pop()
      result.push(processed.value)
      lastVisited =  processed;
    }
  }
};

// const createTree = (n, A1) => {
//   if (n === 0) {
//     return A1;
//   }
//   A1.left = new TreeNode(A1.value + 1);
//   A1.right = new TreeNode(A1.value + 2);
//   createTree(n - 1, A1.left);
//   createTree(n - 1, A1.right);
//   return A1;
// };

// let rootA = new TreeNode(20);
