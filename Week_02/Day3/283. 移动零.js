const moveZeroes = function(nums) {
  for (let i = 0, j = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) {
      if (i !== j) {
        nums[j] = nums[i]
        nums[i] = 0
      }
      j++
    }
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
