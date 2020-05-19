const binarySearch = (nums: number[], target: number) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const midIdx = left + ~~((right - left) / 2)
    const mid = nums[midIdx]
    if (mid === target) return true
    if (target > mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
}


console.log(binarySearch([10, 14, 19, 26, 27, 31], 19))
console.log(binarySearch([10, 14, 19, 26, 27, 31], 11))
