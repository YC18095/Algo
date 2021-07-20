/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let i = 0,
    j = 1;
  while (i < prices.length - 1) {
    if (prices[j] - prices[i] > max) {
      max = prices[j] - prices[i];
    }
    j++;
    if (j === prices.length) {
      i++;
      j = i + 1;
    }
  }
  return max;
};

maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([2,4,1])
