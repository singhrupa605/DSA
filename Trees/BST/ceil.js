class Solution {
  helper(root, x, min) {
    if (root.data === x) return x;
    if (root.data > x) {
      min = Math.min(min, root.data);
      return min || this.helper(root.left, x, min);
    }
    return this.helper(root.right, x, min);
  }
  findCeil(root, x) {
    let min = Infinity;
    return this.helper(root, x, min);
  }
}

let ans = -1;
function ceil(root, x) {
  while (root) {
    if (root.val === x) return x;
    if (root.val > x) {
      ans = root.val
      root = root.left;
    
    }
    else {
      root = root.right;
    }
  }
  return ans
}
