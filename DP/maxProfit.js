const weights = [4, 5, 6, 7, 9, 12];
const values = [5, 10, 12, 18, 3, 11];

const maxProfit = (capacity, weights, values, n) => {
  if (capacity <= 0 || n === 0) {
    return 0;
  }
  if (weights[n - 1] <= capacity) {
    return Math.max(
      values[n - 1] +
        maxProfit(capacity - weights[n - 1], weights, values, n - 1),
      maxProfit(capacity, weights, values, n - 1)
    );
  } else {
    return maxProfit(capacity, weights, values, n - 1);
  }
};

//console.log(maxProfit(70, weights, values, 6));

// Memoization

const knapsackMemoization = (capacity, weights, values, n) => {
  let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(-1));
 
    return memoise(dp , capacity, weights,values , n)
};

const memoise = (dp, capacity, weights, values, n) => {
  if (capacity === 0 || n === 0) {
    return 0;
  }
  if (dp[n][capacity] !== -1) {
    return dp[n][capacity];
  }
  if (weights[n - 1] <= capacity) {
    return (dp[n][capacity] = Math.max(
      values[n - 1] +
        memoise(dp,capacity - weights[n - 1], weights, values, n - 1),
      memoise(dp,capacity, weights, values, n - 1)
    ));
  } else {
    return (dp[n][capacity] = memoise(dp,capacity, weights, values, n - 1));
  }
};

console.log(knapsackMemoization(70, weights, values, 6));



