var threeSum = function(nums) {
  nums.sort(function(a, b) {
    return a - b
  })
  var len = nums.length
  var result = []
  for (var i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    var l = i + 1
    var r = len - 1
    while (l < r) {
      var sum = nums[l] + nums[r] + nums[i]
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        result.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  return result
}
var nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))
