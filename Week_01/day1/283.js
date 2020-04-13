// 自己的解法 (效率一般)
const moveZeroes = function(nums) {
  const zeros = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      zeros.push(nums[i])
      nums.splice(i, 1)
      i--
    }
  }
  return nums.push(...zeros)
}
console.log(moveZeroes([0, 1, 0, 3, 12]))


// 参考题解
// var moveZeroes = function(nums) {
//   let lastZeroIndex = 0
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (nums[i] !== 0) {
//       nums[lastZeroIndex++] = nums[i]
//     }
//   }

//   for (let i = lastZeroIndex; i < len; i++) {
//     nums[i] = 0
//   }
//   return nums
// };
