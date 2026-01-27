var inorderTraversal = function (root) {
    let inorder = [];
    let cur = root;
    while (cur) {
        if (!cur.left) {
            inorder.push(cur.val)
            cur = cur.right;
        }
        else {
            let prev = cur.left;
           while (prev.right && prev.right !== cur) {
                prev = prev.right;
            }
             if (!prev.right) {
               prev.right = cur;
               cur=cur.left;
            }
            else {
                prev.right = null;
                inorder.push(cur.val)
                cur = cur.right
            }
        }
    }
    return inorder
};