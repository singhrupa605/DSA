let ans = "String",
  n = ans.length;

const reverse1 = (input, output) => {
  if (input.length === 0) {
    return output;
  }
  let letter = input.slice(0, 1);
  let ip = input.slice(1);
  return reverse1(ip, letter + output);
};

const reverse2 = (input) => {
  if (input.length <= 1) {
    return input;
  }

  let output = reverse2(input.slice(1));
  return output + input[0];
};

console.log(reverse2(ans, ""));
