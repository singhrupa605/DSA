var generateMatrix = function (n) {
  let res = [],
    upper = n,
    lower = 0,
    i = 0,
    j = 0,
    count = 1;
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp[j] = 0;
    }
    res.push(temp);
  }

  while (count <= n * n) {
    while (j < upper) {
      res[i][j] = count;
      count++;
      j++;
    }
    j--, i++;
    while (i < upper) {
      res[i][j] = count;
      count++;
      i++;
    }
    i--, j--;
    while (j >= lower) {
      res[i][j] = count;
      count++;
      j--;
    }
    j++, i--;
    while (i > lower) {
      res[i][j] = count;
      count++;
      i--;
    }
    i++, j++, upper--, lower++;
  }
  return res;
};


console.log(generateMatrix(2));
