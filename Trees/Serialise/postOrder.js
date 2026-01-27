var serialize = function (root) {
    let str = "";
    if (!root) return str
    function postOrder(root) {
        if (!root) {
            str += `#,`
            return
        }
        postOrder(root.left)
        postOrder(root.right)
        str += `${root.val},`
    }
    postOrder(root)
    return str.substring(0, str.length - 1)
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) return null;
    let arr = data.split(",");
    function postOrder(arr) {
        if (arr.length === 0) return null;
        let val = arr.pop();
         if(val==="#") return null;
         let node = new TreeNode(Number(val));
         node.right = postOrder(arr);
         node.left = postOrder(arr);
         return node;
    }

  return postOrder(arr)
};

