var solve = function (n, k) {
    let factorial = Array(n), num = 1, array = Array.from({length : n},(_, i)=>i+1 ), ans="";
   
    factorial[0] = num;
    for(let i = 1;i<n;i++)
    {  
        num++;
        factorial[i] = num*factorial[i-1];
       
    }
    while(n>0)
    {   
        let blockSize =  factorial[n-2];
        let index =  ((k-1)/blockSize)|0;
        let picked  =  array.splice(index,1)[0];
        ans+=picked;
        k =  ((k-1) % blockSize) + 1;
        n = array.length;
    }
    return ans;
};

console.log(solve(3,4))
