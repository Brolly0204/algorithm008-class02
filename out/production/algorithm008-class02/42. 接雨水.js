// 暴力解法
// const trap = function(height) {
//   let res = 0
//   for (let i = 1, len = height.length; i < len - 1; i++) {
//     let maxLeft = 0
//     let maxRight = 0
//     for (let j = i; j >= 0; j--) {
//       maxLeft = Math.max(maxLeft, height[j])
//     }

//     for (let j = i; j < len; j++) {
//       maxRight = Math.max(maxRight, height[j])
//     }

//     res += Math.min(maxLeft, maxRight) - height[i]
//   }
//   return res
// }

// const trap = function(height) {
//   const stack = []
//   let area = 0
//   for (let i = 0, len = height.length; i < len; i++) {
//     while (stack.length && height[i] > height[stack[stack.length - 1]]) {
//       const top = stack.pop()
//       if (!stack.length) break
//       const peek = stack[stack.length - 1]
//       const minHei = Math.min(height[i], height[peek]) - height[top]
//       area += minHei * (i - peek - 1)
//     }
//     stack.push(i)
//   }
//   return area
// }

// const trap = function(height) {
//   const stack = []
//   let area = 0
//   let i = 0
//   while (i < height.length) {
//     while (stack.length && height[i] > height[stack[stack.length - 1]]) {
//       const top = stack.pop()
//       if (!stack.length) break
//       const peek = stack[stack.length - 1]
//       const dis = i - peek - 1
//       const minHeight = Math.min(height[i], height[peek]) - height[top]
//       area += minHeight * dis
//     }
//     stack.push(i++)
//   }
//   return area
// }

// 双指针
// const trap = function(height) {
//   let left = 0
//   let right = height.length - 1
//   let leftMax = 0
//   let rightMax = 0
//   let result = 0

//   while (left <= right) {
//     if (leftMax < rightMax) {
//       const val = leftMax - height[left]
//       val > 0 && (result += val)
//       leftMax = Math.max(leftMax, height[left++])
//     } else {
//       const val = rightMax - height[right]
//       val > 0 && (result += val)
//       rightMax = Math.max(rightMax, height[right--])
//     }
//   }
//   return result
// }

// const trap = function(height) {
//   let lef = 0
//   let rig = height.length - 1
//   let lefMax = 0
//   let rigMax = 0
//   let ans = 0
//   while (lef < rig) {
//     lefMax = Math.max(lefMax, height[lef])
//     rigMax = Math.max(rigMax, height[rig])
//     if (lefMax <= rigMax) {
//       ans += lefMax - height[lef++]
//     } else {
//       ans += rigMax - height[rig--]
//     }
//   }
//   return ans
// }

const trap = function(height) {
  let lef = 0
  let rig = height.length - 1
  let lefMax = 0
  let rigMax = 0
  let ans = 0
  while (lef < rig) {
    lefMax = Math.max(lefMax, height[lef])
    rigMax = Math.max(rigMax, height[rig])
    if (lefMax <= rigMax) {
      ans += lefMax - height[lef++]
    } else {
      ans += rigMax - height[rig--]
    }
  }
  return ans
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
