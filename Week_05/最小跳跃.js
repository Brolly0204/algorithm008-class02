// const jump = function (nums: number[]) {
//   let pos = nums.length - 1
//   let steps = 0
//   while (pos > 0) {
//     for (let i = 0; i < pos; i++) {
//       if (i + nums[i] >= pos) {
//         pos = i
//         steps++
//         break
//       }
//     }
//   }
//   return steps
// }
var jump = function (nums) {
    var end = 0;
    var max = 0;
    var step = 0;
    for (var i = 0, len = nums.length; i < len - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === end) {
            end = max;
            step++;
        }
    }
    return step;
};
console.log(jump([2, 3, 1, 1, 4]));
