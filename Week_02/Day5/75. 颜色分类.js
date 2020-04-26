var sortColors = function(nums) {
  var maxVal = Math.max.apply(null, nums)
  var bucket = new Array(maxVal + 1)
  for (var i = 0, len = nums.length; i < len; i++) {
    var num = nums[i]
    bucket[num] ? bucket[num]++ : (bucket[num] = 1)
  }
  var index = 0
  for (var i = 0, bucketLen = bucket.length; i < bucket.length; i++) {
    while (bucket[i] > 0) {
      nums[index++] = i
      bucket[i]--
    }
  }
  return nums
}
console.log(sortColors([2, 0, 2, 1, 1, 0]))
