const binarySearch = (nums: number[], target: number) => {
  let left: number = 0
  let right: number = nums.length - 1

  let n = 0
  while (left <= right) {
    n++
    const mid = left + ~~((right - left) / 2)
    const middle = nums[mid]
    console.log(n)
    if (middle === target) return true
    if (middle < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
}

const arr: number[] = [2, 11, 15, 19, 30, 32, 61, 72, 88, 90, 96]
console.log(binarySearch(arr, 15))
