const findLac = (root, p, q) => {
  if (root === null) return null;
  if (root.val === p.val) return p;
  if (root.val === q.val) return q;
  let left = findLac(root.left, p, q);
  let right = findLac(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
};
