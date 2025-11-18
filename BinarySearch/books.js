



const allocateBooks = (books,k)=>
{
    let left  = Math.max(...books), right =  books.reduce((acc, x)=> acc+x , 0);
    while(left<=right)
    {
       let mid  = Math.floor((left+right)/2)
        if(check(mid, books, k))
        {
            right = mid-1;
        }
        else
        {
            left = mid+1;
        }
    }
    return left
}

const check = (mid, books, k)=>{
    let sum = 0;
    let allocated = 1;
   for(let i=0;i<books.length;i++)
   {
       sum+=books[i]
       if(sum>mid)
        {
            allocated++;
            sum = books[i]
        }
        if(allocated>k)
        {
            return false;
        }
   }

   return true;
}


let nums  =  [100,200,300,400]
console.log(allocateBooks(nums, 2))