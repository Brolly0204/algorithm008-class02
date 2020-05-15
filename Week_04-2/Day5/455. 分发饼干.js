'use strict'
exports.__esModule = true
var findContentChildren = function(g, s) {
  g.sort(function(a, b) {
    return a - b
  })
  s.sort(function(a, b) {
    return a - b
  })
  var i = 0
  var j = 0
  var gl = g.length
  var sl = s.length
  var res = 0
  while (i < gl && j < sl) {
    if (g[i] <= s[j]) {
      res += 1
      i++
      j++
    } else {
      j++
    }
  }
  return res
}
console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
