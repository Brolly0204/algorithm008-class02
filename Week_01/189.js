// const rotate = function(nums, k) {
//   nums.unshift(...nums.splice(nums.length - k))
//   return nums
// }

const rotate = function(nums, k) {
  const len = nums.length
  for (let i = len - k; i < len; i++) {
    nums.unshift(nums.pop())
  }
  return nums
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
