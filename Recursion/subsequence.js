let arr = [1, 2, 1],
  count = 0,
  sum = 2;

const recur = (ip, op) => {
  if (ip.length === 0) {
    if (op === sum) {
      count++;
    }
    return;
  }

  recur(ip.slice(1), op);
  recur(ip.slice(1), op + ip[0]);
};
recur(arr, 0);
console.log(count);
