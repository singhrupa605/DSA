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
var widthOfBinaryTree = function (root) {

    if (!root) return 0
    let maxWidth = 0;
    let queue = [{node:root, index:0}]
    while (queue.length > 0) {
        let size = queue.length;
         let first = 0,last=0;
        let minIndex = queue[0].index
        for (let i = 0; i < size; i++) {
            let {node,index} = queue.shift()
            index = index-minIndex
            if(i===0)
            {
                first = index
            }
            if(i===size-1)
            {
                last = index
            }
            if (node.left) {
                queue.push({node:node.left, index:2*index+1})
            }
            if (node.right) {
                queue.push({node:node.right,index:2*index+2})
            }
               
        }
        maxWidth = Math.max(maxWidth, last-first+1)
    }
    return maxWidth
};