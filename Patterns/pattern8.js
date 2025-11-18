const print = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      process.stdout.write(`${n - Math.min(i, 2 * n - 2 - i, j, 2 * n - 2 - j)}`);
    }
    console.log();
  }

  
};

    const reverse=(arr, n,i=0)=> {
       
      if(i>=n/2)
      {
        return 
      }
      [arr[i] , arr[n-1]] = [arr[n-1],arr[i]]
      reverse(arr, n-1, i+1)
    }
   let arr = [1,0]
   reverse(arr, 2)
   console.log(arr)


// print(4);
