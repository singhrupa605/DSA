var flatten = function (root) {

    let prev = null;
    function helper(root) {
        if (!root) return
        helper(root.right)
        helper(root.left)
        root.right = prev;
        root.left = null
        prev = root
    }

    helper(root)



};