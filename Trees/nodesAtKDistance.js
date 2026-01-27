
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    
    let map = new Map();
    let queue = [target];
    let visited  = new Set()
    setParents(root)
   let dist = 0;
    while(dist<k)
    {      dist++ 
           let size = queue.length
           for(let i=0;i<size;i++)
           {
               let node = queue.shift()
                visited.add(node.val)
               let nodeParent = map.get(node)
               if(nodeParent && !visited.has(nodeParent.val))
               {
                 queue.push(nodeParent)
               }
               if(node.left  && !visited.has(node.left.val))
               {
                queue.push(node.left)
               }
                if(node.right  && !visited.has(node.right.val))
               {
                queue.push(node.right)
               }
           }
           
    }
    
    function setParents(root)
    {
        if(root===null) return 
        if(root.left) map.set(root.left, root)
        if(root.right) map.set(root.right, root)
        setParents(root.left)
        setParents(root.right)
    }
   
   return queue.map((obj)=>obj.val)


};