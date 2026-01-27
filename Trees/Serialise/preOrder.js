var serialize = function (root) {
    let str = "";
    if (!root) return str
    function preOrder(root) {
        if (!root) {
            str += `#,`
            return
        }
        str += `${root.val},`
        preOrder(root.left)
        preOrder(root.right)
     
    }
    preOrder(root)
    return str.substring(0, str.length - 1)
}

var deserialize = function (data) {
    if (data.length === 0) return null;
    let arr = data.split(",");
    function preOrder(arr) {
        if (arr.length === 0) return null;
        let val = arr.shift();
         if(val==="#") return null;
         let node = new TreeNode(Number(val));
         node.left = preOrder(arr) 
         node.right =preOrder(arr) 
         return node;
    }

  return preOrder(arr)
};

