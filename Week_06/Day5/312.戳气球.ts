const maxCoins = (nums: number[]): number => {
  const n = nums.length + 2
  nums.push(1)
  nums.unshift(1)
  const memo: number[][] = new Array(n).fill([])
 
  let dp: (memo: number[][], nums: number[], left: number, right: number) => number
  dp = (memo, nums, left, right) => {
    if (left + 1 === right) return 0
    if (memo[left][right] > 0) return memo[left][right]

    let ans = 0
    for (let i = left + 1; i < right; i++) {
      ans = Math.max(ans, nums[left] * nums[i] * nums[right] + dp(memo, nums, left, i) + dp(memo, nums, i, right))
    }
    memo[left][right] = ans
    return ans
  }
  return dp(memo, nums, 0, n - 1)
}

console.log(maxCoins([3, 1, 5, 8]))