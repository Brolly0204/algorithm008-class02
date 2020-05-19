var majorityElement = function(nums) {
  var most = ~~(nums.length / 2)
  var map = new Map()
  for (var i = 0, len = nums.length; i < len; i++) {
    var cur = nums[i]
    map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1)
    if (map.get(cur) > most) {
      return cur
    }
  }
}
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
