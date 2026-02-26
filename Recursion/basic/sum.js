function sum(n, res = 0) {
  if (n === 0) {
    console.log(res)
    return;
  }
  res += n;
  sum(n - 1, res);
}

sum(3)
