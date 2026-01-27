const reverse = (str, op)=>
{    
    if(str.length===0)
    {  
       
        return op
    }
    return reverse(str.slice(1),str[0]+op)


}
 console.log(reverse("abcd",""))
