var serialize = function (root) {
  let str = "";
  if (!root) return str;
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (!node) {
      str += "#,";
    } else {
      str += `${node.val},`;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return str.substring(0, str.length - 1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) return null;
  let arr = data.split(",");
  let root = new TreeNode(Number(arr[0]));
  let queue = [root];
  index = 0;
  while (queue.length > 0 && index < arr.length) {
    let node = queue.shift();
    index++;
    let left = arr[index];
    if (left === "#") {
      node.left = null;
    } else {
      let nodeLeft = new TreeNode(Number(left));
      node.left = nodeLeft;
      queue.push(nodeLeft);
    }
    index++;
    let right = arr[index];
    if (right === "#") {
      node.right = null;
    } else {
      let nodeRight = new TreeNode(Number(right));
      node.right = nodeRight;
      queue.push(nodeRight);
    }
  }
  return root;
};
