const perm = (input, output) => {
  if (input.length === 0) {
    console.log(output);
    return;
  }
  for (let i = 0; i < input.length; i++) {
    let s = input.slice(i, i + 1);
    let rem = input.slice(0, i) + input.slice(i + 1);
    perm(rem,  output+s);
  }
};

perm("abc" , "")