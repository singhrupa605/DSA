var solve = function (n) {
    let ans = 0, len = n.length, num = parseInt(n , 2);
    for(let i = 0;i<len;i++)
    {   
        let ans = (ans<<1)|(num&1)
        
        ans |= pos
        num>>=1
    
    }
   return ans.toString(2)
};

console.log(solve("101111001"))