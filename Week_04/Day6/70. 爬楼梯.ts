// const climbStaris = (n: number): number => {
//   if (n <= 3) return n
//   let a = 1
//   let b = 2
//   let c = 3
//   n -= 3
//   while (--n >= 0) {
//     c = a + b
//     a = b
//     b = c
//   }
//   return c
// }

const climbStairs = (n: number): number => {
  if (n <= 3) return n
  const dp: number[] = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
console.log(climbStairs(2))
console.log(climbStairs(3))
export { }