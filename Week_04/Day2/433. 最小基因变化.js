var minMutation = function(start, end, bank) {
  var bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1
  var queue = []
  queue.push([start, 0])
  var dna = ['A', 'C', 'G', 'T']
  while (queue.length !== 0) {
    var _a = queue.shift(),
      s = _a[0],
      count = _a[1]
    if (s === end) return count
    for (var i = 0, il = s.length; i < il; i++) {
      for (var j = 0, jl = dna.length; j < jl; j++) {
        if (s[i] === dna[j]) continue
        var str = s.substring(0, i) + dna[j] + s.substring(i + 1)
        if (bankSet.has(str)) {
          queue.push([str, count + 1])
          bankSet['delete'](str)
        }
      }
    }
  }
  return -1
}
// const start = "AACCGGTT"
// const end = "AACCGGTA"
// const bank = ["AACCGGTA"]
var start = 'AAAAACCC'
var end = 'AACCCCCC'
var bank = ['AAAACCCC', 'AAACCCCC', 'AACCCCCC']
console.log(minMutation(start, end, bank))
