// const coinChange = (coins: number[], amount: number) => {
//   const dp = [0]
//   const helper = (coins: number[], amount: number): number => {
//     if (typeof dp[amount] !== 'undefined') return dp[amount]
//     if (amount === 0) return 0
//
//     let res = Number.MAX_SAFE_INTEGER
//     for (let coin of coins) {
//       if (amount >= coin) {
//         let cur_res = helper(coins, amount - coin)
//         if (cur_res === -1) {
//           continue
//         }
//         res = Math.min(cur_res + 1, res)
//       }
//     }
//     if (res === Number.MAX_SAFE_INTEGER) {
//       dp[amount] = -1
//       return -1
//     }
//     dp[amount] = res
//     return res
//   }
//   return helper(coins, amount)
// }

const coinChange = (coins: number[], amount: number) => {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let c of coins) {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1)
      }
    }
  }
  return dp[amount] === -1 ? -1 : dp[amount]
}

// console.log(coinChange([186, 419, 83, 408],6249))
console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))
