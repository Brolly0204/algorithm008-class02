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
var canJump = function(nums) {
  var reach = 0
  var n = nums.length
  for (var i = 0; i < n; i++) {
    if (i > reach) {
      // 当前所在索引 超过了最远位置
      return false
    }
    reach = Math.max(i + nums[i], reach)
  }
  return true
}
console.log(canJump([2, 3, 1, 1, 4]))
