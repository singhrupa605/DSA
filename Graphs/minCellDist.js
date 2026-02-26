class Solution {
    nearest(grid) {
        // code here
        let m = grid.length, n = grid[0].length
        let visited = Array.from({length:m}, ()=> Array(n).fill(0))
        let queue = [], index = 0;
        for(let i = 0;i<m;i++)
        {
            for(let j = 0;j<n;j++)
            {
                 if(grid[i][j]===1)
                 {
                     queue.push([i,j])
                     visited[i][j]=1
                 }
            }
        }
        const directions = [[-1,0], [0,-1],[1,0],[0,1]]
        let dist = 0;
        while(index<queue.length)
        {
            let size =  queue.length-index;
            for(let i = 0;i<size;i++)
            {  
                let [row, col] = queue[index++]
                grid[row][col] = dist;
                for(let [r,c] of directions)
                {   
                    const dr = row+r, dc = col+c 
                    if(dr<m && dc<n && dr>=0 && dc>=0 && !visited[dr][dc])
                    {
                        visited[dr][dc] = 1
                        queue.push([dr, dc])
                        
                    }
                }
               
            }
             dist++
        }
        
        return grid
    }
    
    
}