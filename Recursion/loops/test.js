// function test(n) {
//   for (let i = 1; i <= 2; i++) {
//     console.log("Start", n, i)
//     if (n > 0)
//         {test(n - 1)
//         }
//     console.log("End", n, i)
//   }
// }
// test(1)

var generateParenthesis = function (n) {
  let total = 2 * n;
  let result = [];

  const helper = (open, closed, output) => {
    if (open + closed === total) {
      result.push(output);
      return;
    }
    if (open < n) {
      helper(open+1, closed, output + "(");
    }
    if (open > closed) {
      helper(open, closed+1, output + ")");
    }
  };
  helper(0, 0, "");
  console.log(result);
};
generateParenthesis(3);
