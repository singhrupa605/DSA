var diameterOfBinaryTree = function (root) {
    let diameter = 0;
    let heightOfTree = (root) => {
        if (!root) return 0
        let left = heightOfTree(root.left) 
        let right = heightOfTree(root.right) 
        diameter = Math.max(diameter, left + right)
        return Math.max(left, right)+1
    }
    heightOfTree(root)
    return diameter
};
