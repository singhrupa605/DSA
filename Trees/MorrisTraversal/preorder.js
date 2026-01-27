var preorderTraversal = function (root) {
    let preorder = [];
    let cur = root;
    while (cur) {
        if (!cur.left) {
            preorder.push(cur.val)
            cur = cur.right;
        }
        else {
            let prev = cur.left;
           while (prev.right && prev.right !== cur) {
                prev = prev.right;
            }
             if (!prev.right) {
                preorder.push(cur.val)
               prev.right = cur;
               cur=cur.left;
            }
            else {
                prev.right = null;
                cur = cur.right
            }
        }
    }
    return preorder
};