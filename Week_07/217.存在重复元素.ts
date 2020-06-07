const containsDuplicate = (nums: number[]): boolean => {
  nums.sort((a, b) => a - b)
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] === nums[i - 1]) return true
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 2]))
console.log(containsDuplicate([1, 2, 3]))
