// const twoSum = function(nums, target) {
//   for (let i = 0, len = nums.length; i < len; i++) {
//     const diff = target - nums[i]
//     const idx = nums.indexOf(diff, i + 1)
//     if (idx > -1) {
//       return [i, idx]
//     }
//   }
//   return []
// }

// map
const twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [i, map.get(diff)]
    }
    map.set(nums[i], i)
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
