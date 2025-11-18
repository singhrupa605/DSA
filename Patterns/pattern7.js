const print = (n)=>
  {
    
       for(let i = 1;i<=n;i++)
       {
          for(let j = 1;j<=n;j++)
          {
              if(i===1 || j===1|| i===n||j===n)
              {
                process.stdout.write(" * ")
              }
              else{
                 process.stdout.write("   ")
              }
          }
         console.log()
       }


  }

  print(5)