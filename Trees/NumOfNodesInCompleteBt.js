/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root) return 0;
    const lh = leftHeight(root)
    const rh = rightHeight(root);
    if(leftHeight===rightHeight) return (1<<lh)-1

    return 1+countNodes(root.left)+ countNodes(root.right)
     

};

var leftHeight = function(root)
{
        if(!root) return 0;
        return 1 + leftHeight(root.left)
}
var rightHeight = function(root)
{
        if(!root) return 0;
        return 1 + rightHeight(root.right)
}