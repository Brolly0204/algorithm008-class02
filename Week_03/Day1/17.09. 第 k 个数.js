var getKthMagicNumber = function(k) {
  var t3 = 0
  var t5 = 0
  var t7 = 0
  var ans = [1]
  for (var i = 1; i < k; i++) {
    ans[i] = Math.min(ans[t3] * 3, Math.min(ans[t5] * 5, ans[t7] * 7))
    if (ans[i] == ans[t3] * 3) t3++
    if (ans[i] == ans[t5] * 5) t5++
    if (ans[i] == ans[t7] * 7) t7++
  }
  return ans[k - 1]
}
console.log(getKthMagicNumber(5))
