// const fourSum = function (nums: number[], target: number): Array<number[]> {
//   if (nums.length < 4) return []
//   nums.sort((a, b) => a - b)
//   const len = nums.length
//
//   const result: Array<number[]> = []
//   for (let a = 0; a < len - 3; a++) {
//     if (a > 0 && nums[a] === nums[a - 1]) continue
//     for (let i = a + 1; i < len - 2; i++) {
//       if (i > a + 1 && nums[i] === nums[i - 1]) continue
//       let l = i + 1
//       let r = len - 1
//       while (l < r) {
//         const sum = nums[a] + nums[l] + nums[r] + nums[i]
//         if (sum < target) {
//           while (l < r && nums[l] === nums[l + 1]) l++
//           l++
//         } else if (sum > target) {
//           while (l < r && nums[r] === nums[r - 1]) r--
//           r--
//         } else {
//           result.push([nums[a], nums[l], nums[r], nums[i]])
//           while (l < r && nums[l] === nums[l + 1]) l++
//           while (l < r && nums[r] === nums[r - 1]) r--
//           l++
//           r--
//         }
//       }
//     }
//   }
//   return result
// }
var fourSum = function (nums, target) {
  if (nums.length < 4)
    return [];
  nums.sort(function (a, b) {
    return a - b;
  });
  var len = nums.length;
  var result = [];
  for (var a = 0; a < len - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1])
      continue;
    for (var i = a + 1; i < len - 2; i++) {
      if (i > a + 1 && nums[i] === nums[i - 1])
        continue;
      var l = i + 1;
      var r = len - 1;
      while (l < r) {
        var sum = nums[a] + nums[l] + nums[r] + nums[i];
        if (sum < target) {
          while (l < r && nums[l] === nums[++l]) {
          }
        } else if (sum > target) {
          while (l < r && nums[r] === nums[--r]) {
          }
        } else {
          result.push([nums[a], nums[l], nums[r], nums[i]]);
          while (l < r && nums[l] === nums[++l]) {
          }
          while (l < r && nums[r] === nums[--r]) {
          }
        }
      }
    }
  }
  return result;
};
// [ [ 1, 0, -2, 2 ], [ 1, 0, -2, 2 ], [ 0, -1, 0, 2 ] ]
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0));
