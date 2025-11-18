const Queue = require("./queue")


//Pre-order Traversal (DFS)
var preOrder = function (root)
{
     if(root===null)
     {
        return null
     }
     console.log(root.value);
     preOrder(root.next)
     preOrder(root.right)
}

// Inorder Traversal
var inOrder = function (root)
{
     if(root===null)
     {
        return null
     }
     preOrder(root.next)
     console.log(root.value);
     preOrder(root.right)
}

// Level Order Traversal (BFS)
    
     
var levelOrder = function()
{
    let queue =  new Queue()
    

}

    
  
