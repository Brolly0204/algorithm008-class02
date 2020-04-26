// const maxSlidingWindow = function(nums, k) {
//   let result = []
//   for (let i = 0, len = nums.length; i <= len - k; i++) {
//     result.push(Math.max.apply(null, nums.slice(i, i + k)))
//   }
//   return result
// }

// const maxSlidingWindow = function(nums, k) {
//   if (nums.length === 0) return []
//   const arr = nums.slice(0, k - 1)
//   const result = []

//   for (let i = k - 1, len = nums.length; i < len; i++) {
//     arr.push(nums[i])
//     result.push(Math.max.apply(null, arr))
//     arr.shift()
//   }
//   return result
// }

const maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return []
  const result = []
  let maxIdx = -1
  let max
  for (let i = 0, len = nums.length; i < len - k + 1; i++) {
    // 在滑动窗口内
    if (maxIdx >= i) {
      const idx = i + k - 1
      if (nums[idx] > max) {
        maxIdx = idx
        max = nums[maxIdx]
      }
    } else {
      max = nums[i]
      for (let j = i; j < i + k; j++) {
        if (nums[j] > max) {
          max = nums[j]
          maxIdx = j
        }
      }
    }
    result[i] = max
  }
  return result
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
