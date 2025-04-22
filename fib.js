var fib = function (n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    memo[n] = dp[i] = dp[i - 1] + dp[i - 2];
  }

  return memo[n];
};

console.log(fib(2));
