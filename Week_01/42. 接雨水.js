const trap = function(height) {
  const stack = []
  let area = 0
  for (let i = 0, len = height.length; i < len; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      if (!stack.length) break
      const peek = stack[stack.length - 1]
      const minHei = Math.min(height[i], height[peek]) - height[top]
      area += minHei * (i - peek - 1)
    }
    stack.push(i)
  }
  return area
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
