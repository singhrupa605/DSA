const TreeNode = require("./represent");

const mirrorTree = (root1, root2) => {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.value !== root2.value) return false;

  return (
    mirrorTree(root1.left, root2.right) && mirrorTree(root1.right, root2.left)
  );
};



// ------- Tree A1 (3 levels) -------
let A1 = new TreeNode(10);

A1.left = new TreeNode(20);
A1.right = new TreeNode(30);

A1.left.left = new TreeNode(40);
A1.left.right = new TreeNode(50);

A1.right.left = new TreeNode(60);
A1.right.right = new TreeNode(70);

// ------- Tree B1 (mirror of A1) -------
let B1 = new TreeNode(10);

B1.left = new TreeNode(30);
B1.right = new TreeNode(20);

B1.left.left = new TreeNode(70);
B1.left.right = new TreeNode(60);

B1.right.left = new TreeNode(50);
B1.right.right = new TreeNode(40);

console.log(mirrorTree(A1, B1));
