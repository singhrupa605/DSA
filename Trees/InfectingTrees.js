var amountOfTime = function(root, start) {
    let targetNode = findNode(root, start)
    let map  = new Map();
    setParents(root,map)
    let queue = [targetNode]
    let visited  = new Set();
    let time = 0;
    while(queue.length>0)
    {
      let size= queue.length
      for(let i = 0;i<size;i++)
      {
         let node = queue.shift();
         visited.add(node.val)
         let nodeParent =   map.get(node)
         if(nodeParent && !visited.has(nodeParent.val)){
            queue.push(nodeParent)
         }
         if(node.left && !visited.has(node.left.val))
         {
            queue.push(node.left)
         }
         if(node.right && !visited.has(node.right.val))
         {
            queue.push(node.right)
         }
      }
      if(queue.length)
      {
         time++;
      }
     
    }
    return time
};


   function setParents(root, map)
    {
        if(root===null) return 
        if(root.left) map.set(root.left, root)
        if(root.right) map.set(root.right, root)
        setParents(root.left,map)
        setParents(root.right,map)
    }

    function findNode(root, target)
    {
        if(!root) return null
        if(root.val === target) return root
        return findNode(root.left, target) || findNode(root.right, target)
    }