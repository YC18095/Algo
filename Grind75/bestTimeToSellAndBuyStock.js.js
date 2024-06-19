// const maxProfit = function(prices) {
//     let profit = 0
//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i + 1; j < prices.length; j ++) {
//         if( profit < (prices[j] - prices[i])) {
//             profit = (prices[j] - prices[i])
//             }
//         }
//     }
//     return profit
// };

// const maxProfit = function(prices) {
//     let profit = 0
//     let i = 0
//     let j = i + 1
//     while (true) {
//             if( profit < (prices[j] - prices[i])) {
//             profit = (prices[j] - prices[i])
//             }
//         j++;
//         if( j >= prices.length ) {
//             i++
//             j = i + 1
//         }
//         if(i == prices.length) {
//             break;
//         }
//     }
//     return profit
// }

const maxProfit = (prices) => {
  let buy_prices = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buy_prices > prices[i]) {
      buy_prices = prices[i];
    }
    profit = Math.max(profit, prices[i] - buy_prices);
  }
  return profit;
};

maxProfit([7, 6, 4, 3, 1]);
// maxProfit([7,1,5,3,6,4])
// maxProfit([1,2])
// maxProfit([2,1,4])
// maxProfit([4,7,1,2])
