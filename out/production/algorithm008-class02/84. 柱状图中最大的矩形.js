// const largestRectangleArea = function(heights) {
//   let maxArea = 0
//   for (let i = 0; i < heights.length; i++) {
//     let minHeight = Number.MAX_SAFE_INTEGER
//     for (let j = i; j < heights.length; j++) {
//       minHeight = Math.min(minHeight, heights[j])
//       maxArea = Math.max(maxArea, minHeight * (j - i + 1))
//     }
//   }
//   return maxArea
// }

// const largestRectangleArea = function(heights) {
//   const stack = [-1]
//   let maxArea = 0
//   for (let i = 0, len = heights.length; i < len; i++) {
//     while (
//       stack[stack.length - 1] !== -1 &&
//       heights[i] <= heights[stack[stack.length - 1]]
//     ) {
//       maxArea = Math.max(
//         maxArea,
//         heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
//       )
//     }
//     stack.push(i)
//   }

//   while (stack[stack.length - 1] !== -1) {
//     maxArea = Math.max(
//       maxArea,
//       heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1)
//     )
//   }
//   return maxArea
// }

const largestRectangleArea = function(heights) {
  const stack = [-1]
  let maxArea = 0
  for (let i = 0, len = heights.length; i < len; i++) {
    while (
      stack[stack.length - 1] !== -1 &&
      heights[i] <= heights[stack[stack.length - 1]]
    ) {
      maxArea = Math.max(
        maxArea,
        heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i)
  }

  while (stack[stack.length - 1] !== -1) {
    maxArea = Math.max(
      maxArea,
      heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1)
    )
  }
  return maxArea
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
