
class Solution {
    
     bfs(start, visited, adjMat)
        {
        visited[start] = 1;
        let queue = [[start, -1]], index=0;
        while(index<queue.length)
        {
            let [node, parent] =  queue[index++];
            for(let num of adjMat[node])
            {
                if(!visited[num])
                {
                    visited[num] = 1;
                    queue.push([num, node])
                }
                else if(num!==parent)
                {
                    return true
                }
            }
            
        }
        
         return false;
        }
        
        dfs(start,parent, visited, adjMat)
        {  
            visited[start] = 1
             for(let num of adjMat[start])
             {
                  if(!visited[num])
                {
                   if(this.dfs(num , start, visited, adjMat)) return true;
                }
                else if(num!==parent)
                {
                    return true
                }
             }
             return false;
        }
    
    isCycle(V, edges) {
        // Code here
      let visited= new Array(V).fill(0)
       
      let adjMat =  Array.from({length:V},()=>[]);
         for(let i = 0; i<edges.length;i++)
        {
           let u = edges[i][0]
           let v = edges[i][1]
           adjMat[u].push(v)
           adjMat[v].push(u)
        }
      
        
       for(let i =0;i<V;i++)
       {
           if(!visited[i])
           {
               if(this.dfs(i,-1, visited, adjMat))
               {
                   return true
               }
           }
       }
       
       return false
        
    }
}