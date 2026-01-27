

function solve(arr)
{
   let preProd = [1], n = arr.length;
   for(let i = 1;i<arr.length;i++)
   {
       preProd.push(preProd[i-1]*arr[i-1])
   }
   let postProd = 1;
   for(let i = n-1;i>=0;i--)
   {
          preProd[i] = preProd[i]*postProd
          postProd*=arr[i]
   }
   return preProd
}

console.log(solve([1,2,3,4]))