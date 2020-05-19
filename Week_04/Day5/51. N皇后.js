/**
 * @param {number}
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n < 1) return []
  var result = []
  var cols = new Set()
  var pie = new Set()
  var na = new Set()
  var dfs = function(n, row, list) {
    if (row >= n) {
      result.push(list)
      return
    }
    for (var col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) {
        continue
      }
      cols.add(col)
      pie.add(row + col)
      na.add(row - col)
      dfs(n, row + 1, list.concat(col))
      cols['delete'](col)
      pie['delete'](row + col)
      na['delete'](row - col)
    }
  }
  var gen_result = function(n) {
    var board = []
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
      var item = result_1[_i]
      for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
        var i = item_1[_a]
        board.push('.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1))
      }
    }
    var queens = []
    for (var j = 0; j < board.length; j += n) {
      queens.push(board.slice(j, j + n))
    }
    return queens
  }
  dfs(n, 0, [])
  return gen_result(n)
}
console.log(solveNQueens(8))
