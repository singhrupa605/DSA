function numSubmat(matrix) {

    const m = matrix.length, n = matrix[0].length;
    const height = new Array(n).fill(0)

    for(let i = 0;i<m;i++)
    {
        for(let j = 0;j<n;j++)
        {
            height[j] = matrix[i][j]===1?height[j]+1:0;
        }

        // for(let j=0;j<n;j++)
        // {
        //     let minHeight = height[j];
        //     for(let k=j;k>=0 && minHeight>0;k--)
        //     {
        //           minHeight  = Math.min(minHeight, height[k])
        //           ans+=minHeight
        //     }
        // }
         let curRowSum = 0;

        for (let j = 0; j < n; j++) {
            let count = 1;

            while (stack.length && stack[stack.length - 1][0] >= height[j]) {
                const [h, c] = stack.pop();
                curRowSum -= h * c;
                count += c;
            }

            stack.push([height[j], count]);
            curRowSum += height[j] * count;
            ans += curRowSum;
        }
        return ans
    }

    


}