const getKthMagicNumber = function (k: number): number {
  let t3 = 0
  let t5 = 0
  let t7 = 0
  const ans = [1]
  for (let i = 1; i < k; i++) {
    ans[i] = Math.min(ans[t3] * 3, Math.min(ans[t5] * 5, ans[t7] * 7))
    if (ans[i] == ans[t3] * 3) t3++
    if (ans[i] == ans[t5] * 5) t5++
    if (ans[i] == ans[t7] * 7) t7++
  }
  return ans[k - 1]
}

console.log(getKthMagicNumber(5))