function topView(root) {
        let queue  = [{node:root, col:0}];
        let map =  new Map();
        
        while(queue.length>0)
        { 
            let {node,col} = queue.shift();
            if(!map.has(col))
            {
                map.set(col, node.data)
                
            }
            
            if(node.left)
            {
                queue.push({node:node.left, col:col-1})
            }
            if(node.right)
            {
                 queue.push({node:node.right, col:col+1})
            }
        }
        
        return   [...map.entries()].sort((obj1,obj2)=>obj1[0]-obj2[0]).map(nod=>nod[1])
        
        
    }