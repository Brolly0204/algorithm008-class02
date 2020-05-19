/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = (n: number) => {
  if (n < 1) return []
  const result: number[][] = []
  const cols = new Set<number>()
  const pie = new Set<number>()
  const na = new Set<number>()

  const dfs = (n: number, row: number, list: number[]) => {
    if (row >= n) {
      result.push(list)
      return
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) {
        continue
      }
      cols.add(col)
      pie.add(row + col)
      na.add(row - col)
      dfs(n, row + 1, list.concat(col))

      cols.delete(col)
      pie.delete(row + col)
      na.delete(row - col)
    }
  }

  const gen_result = (n: number) => {
    const board: string[] = []
    for (let item of result) {
      for (let i of item) {
        board.push('.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1))
      }
    }
    const queens: string[][] = []
    for (let j = 0; j < board.length; j += n) {
      queens.push(board.slice(j, j + n))
    }
    return queens
  }

  dfs(n, 0, [])
  return gen_result(n)
}

console.log(solveNQueens(8))