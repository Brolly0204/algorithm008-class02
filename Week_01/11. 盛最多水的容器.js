// const maxArea = function(height) {
//   let maxArea = 0
//   for (let i = 0, len = height.length; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       const area = Math.min(height[i], height[j]) * (j - i)
//       maxArea = Math.max(area, maxArea)
//     }
//   }
//   return maxArea
// }

// const maxArea = function(height) {
//   const len = height.length
//   let l = 0
//   let r = len - 1
//   let max = 0
//   while (l < r) {
//     const lv = height[l]
//     const rv = height[r]
//     const area = Math.min(lv, rv) * (r - l)
//     max = Math.max(max, area)
//     if (lv < rv) {
//       l++
//     } else {
//       r--
//     }
//   }
//   return max
// }

const maxArea = function(height) {
  let l = 0
  let r = height.length - 1
  let max = 0
  while (l < r) {
    const wid = r - l
    const minHeight = height[l] < height[r] ? height[l++] : height[r--]
    const area = minHeight * wid
    max = Math.max(max, area)
  }
  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
