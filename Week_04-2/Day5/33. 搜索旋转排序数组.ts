/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = start + ((end - start) >> 1)
    if (target === nums[mid]) return mid

    // 左边有序部分 [start, mid]
    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1
      } else {
        // 不在 [start, mid]之间
        start = mid + 1
      }
    } else {
      // 右边有序部分 [mid, end]
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1
      } else {
        // 不在 [mid, end]
        end = mid - 1
      }
    }
  }
  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
