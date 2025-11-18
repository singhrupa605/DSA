let arr1 = [4, -1, 5, -2, 3];
let arr2 = [4, -1, -2];

const dupeNegatives = (arr)=>
{
    let negates = 0 , i=0,n=arr.length;
    while(i+negates < n)
    {
        if(arr[i]<0)
        {
            if(i+negates === n-1)
            {
                n-=1;
                break;
            }
            negates++;
        }
        i++;
    }

    let cutoff = n-negates-1;
    for(let i = cutoff;i>=0;i--)
    {
        if(arr[i]<0)
        {
           arr[i+negates] = arr[i]
           negates--;
           arr[i+negates] = arr[i]
        }
        else{
            arr[i+negates] = arr[i]
        }
    }
    console.log(arr)}



dupeNegatives(arr2);
