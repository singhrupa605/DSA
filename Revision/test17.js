var solve = function (arr) {
   let stack =  []; 
    for(let i = 0;i<arr.length;i++ )
    {
       if(!isNaN(parseInt(arr[i])))
       {
          stack.push(arr[i])
       }
       else
       {
           let a = parseInt(stack.pop());
           let b = parseInt(stack.pop());
           let res =  findOp(arr[i],a,b)
           stack.push(res)
       }
       console.log(stack)
    }
    return stack[0]
};

const findOp = (ch, c,d)=>
{  
    a = c>d?c:d;
    b = c<d?c:d;
    switch(ch)
    {
       case "+" : return a+b;
       case "-" : return a-b;
       case "*" : return a*b;
       case "/" : return Math.floor(a/b);
    }
}

console.log(solve( ["4","13","5","/","+"]))