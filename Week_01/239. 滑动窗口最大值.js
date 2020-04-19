// const maxSlidingWindow = function(nums, k) {
//   let maxes = []
//   for (let i = 0, len = nums.length; i < len - k + 1; i++) {
//     maxes.push(Math.max(...nums.slice(i, i + k)))
//   }
//   return maxes
// }

// const maxSlidingWindow = function(nums, k) {
//   const output = []
//   for (let i = 0, len = nums.length; i < len - k + 1; i++) {
//     let max = Number.MIN_SAFE_INTEGER
//     for (let j = i; j < i + k; j++) {
//       max = Math.max(max, nums[j])
//     }
//     output[i] = max
//   }
//   return output
// }

// const maxSlidingWindow = function(nums, k) {
//   const queue = nums.slice(0, k)
//   const len = nums.length
//   const result = []
//   let cur = k - 1
//   while (cur < len) {
//     const max = Math.max.apply(null, queue)
//     result.push(max)
//     cur++
//     queue.push(nums[cur])
//     queue.shift()
//   }
//   return result
// }

class SlideWindow {
  constructor() {
    this.data = []
  }

  push(x) {
    const data = this.data
    while (data.length > 0 && data[data.length - 1] < x) {
      data.pop()
    }
    data.push(x)
  }

  pop(x) {
    const data = this.data
    if (data.length > 0 && data[0] === x) {
      data.shift()
    }
  }
  max() {
    return this.data[0]
  }
}

const maxSlidingWindow = function(nums, k) {
  const len = nums.length
  const res = []
  const windows = new SlideWindow()
  for (let i = 0; i < len; i++) {
    if (i < k - 1) {
      windows.push(nums[i])
    } else {
      windows.push(nums[i])
      res.push(windows.max())
      windows.pop(nums[i - k + 1])
    }
  }
  return res
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const k = 3
console.log(maxSlidingWindow(nums, k))
