const maxProfit = (prices: number[]): number => {
  let profit: number = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += (prices[i + 1] - prices[i])
    }
  }
  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))