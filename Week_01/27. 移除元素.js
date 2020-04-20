// var removeElement = function(nums, val) {
//   for (let i = 0; i < nums.length; ) {
//     if (nums[i] === val) {
//       nums[i] = nums[nums.length - 1]
//       nums.pop()
//       continue
//     }
//     i++
//   }
//   return nums.length
// }

// 双指针
// var removeElement = function(nums, val) {
//   let j = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[j++] = nums[i]
//     }
//   }
//   return j
// }

// const removeElement = function(nums, val) {
//   let i = 0
//   let n = nums.length

//   while (i < n) {
//     if (nums[i] === val) {
//       nums[i] = nums[n - 1]
//       n--
//     } else {
//       i++
//     }
//   }
//   return i
// }

const removeElement = (nums, val) => {
  let ans = 0
  for (let num of nums) {
    if (num !== val) {
      nums[ans++] = num
    }
  }
  return ans
}
console.log(removeElement([3, 2, 2, 3], 3))
