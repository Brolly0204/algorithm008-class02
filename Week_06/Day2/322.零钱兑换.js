var coinChange = function (coins, amount) {
  var dp = [0];
  var helper = function (coins, amount) {
    if (typeof dp[amount] !== 'undefined')
      return dp[amount];
    if (amount === 0)
      return 0;
    var res = Number.MAX_SAFE_INTEGER;
    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
      var coin = coins_1[_i];
      if (amount >= coin) {
        var cur_res = helper(coins, amount - coin);
        if (cur_res === -1) {
          continue;
        }
        res = Math.min(cur_res + 1, res);
      }
    }
    if (res === Number.MAX_SAFE_INTEGER) {
      dp[amount] = -1;
      return -1;
    }
    dp[amount] = res;
    return res;
  };
  return helper(coins, amount);
};
console.log(coinChange([186, 419, 83, 408], 6249));
// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))
