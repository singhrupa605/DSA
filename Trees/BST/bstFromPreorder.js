var bstFromPreorder = function (preorder) {

    let index = 0    
    const construct = (max) => {
        if (index === preorder.length || preorder[index]>max) return null
        let node = new TreeNode(preorder[index])
          index++;
        node.left = construct(node.val)
        node.right = construct(max)
       
        return node;
    }
    return construct(Infinity)

};

