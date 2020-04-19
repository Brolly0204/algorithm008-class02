const threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const result = []
  const len = nums.length
  for (let k = 0; k < len; k++) {
    if (nums[k] > 0) break
    if (k > 0 && nums[k] === nums[k - 1]) continue
    let l = k + 1
    let r = len - 1
    while (l < r) {
      const sum = nums[k] + nums[l] + nums[r]
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        result.push([nums[k], nums[l], nums[r]])
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
