const threeSum = function (nums: number[]): number[][] {
  // 从小到大排序
  nums.sort((a, b) => a - b)

  const result: number[][] = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l: number = i + 1
    let r: number = len - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        result.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

export { }