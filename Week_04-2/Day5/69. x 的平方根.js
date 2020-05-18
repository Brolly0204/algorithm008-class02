var mySqrt = function(x) {
  if (x === 0 || x === 1) return x
  var left = 1
  var right = x
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2)
    if (Math.pow(mid, 2) > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right
}
console.log(mySqrt(4))
console.log(mySqrt(8))
