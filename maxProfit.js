var maxProfit = function (prices) {
  let currentPrice = Infinity;
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    currentPrice = Math.min(currentPrice, prices[i]);
    totalProfit = Math.max(totalProfit, prices[i] - currentPrice);
  }

  return totalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
