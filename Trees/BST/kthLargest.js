class Solution {
  // return the Kth largest element in the given BST rooted at 'root'

  countNodes(root) {
    if (!root) return 0;
    return 1 + this.countNodes(root.left) + this.countNodes(root.right);
  }

  kthLargest(root, k) {
    let counter = 0;
    let ans = root.data;
    let n = this.countNodes(root);
    while (root) {
      if (!root.left) {
        ans = root.data;
        counter++;
        root = root.right;
      } else {
        let curr = root.left;
        while (curr.right && curr.right !== root) {
          curr = curr.right;
        }
        if (!curr.right) {
          curr.right = root;
          root = root.left;
        } else {
          curr.right = null;
          ans = root.data;
          counter++;
          root = root.right;
        }
      }
      if (counter === n - k + 1) {
        return ans;
      }
    }
    return ans;
  }
}
