
function printN(n, arr)
{
      if(n===0) return arr
      printN(n-1, arr)
      arr.push(n)
    
} 

console.log(printN(4, []))
