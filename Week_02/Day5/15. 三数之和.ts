const threeSum = function (nums: number[]): Array<number[]> {
  nums.sort((a, b) => a - b)
  const len = nums.length

  const result: Array<number[]> = []
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l: number = i + 1
    let r: number = len - 1
    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i]
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
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

const nums: number[] = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))