// const canJump = function (nums: number[]) {
//   if (nums.length === 0) return false

//   let endRecord = nums.length - 1
//   for (let i = nums.length - 2; i >= 0; i--) {
//     if (i + nums[i] >= endRecord) {
//       endRecord = i
//     }
//   }
//   return endRecord === 0
// }

const canJump = (nums: number[]) => {
  let reach = 0
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (i > reach) { // 当前遍历索引 超过了最远位置
      return false
    }
    reach = Math.max(i + nums[i], reach)
  }
  // 全部遍历到则成功
  return true
}

console.log(canJump([2, 3, 1, 1, 4]))
