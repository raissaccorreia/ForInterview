/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let profit = 0
    for (let i=0; i < prices.length; i++){
      if (prices[i] > prices[i-1]) {
          profit += prices[i] - prices[i-1]
        } 
    }
    return profit
};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))