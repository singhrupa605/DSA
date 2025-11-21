var rightSideView = function (root, arr = []) {
    if (!root) return arr;
    helper(root, level=0 ,arr)
    return arr;
};

const helper = (root, level, arr) => {
    if (!root) return arr;
    if (level === arr.length) {
        arr.push(root.val)
    }

    helper(root.right, level + 1, arr)
    helper(root.left, level + 1, arr)

    return arr;
}
