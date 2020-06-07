function isValidSudoku(board: string[][]): boolean {
  for (let i = 0, len = board.length; i < len; i++) {
    const row = new Set<string>()
    const col = new Set<string>()

    for (let j = 0; j < len; j++) {
      // 竖着每一列
      if (board[j][i] !== '.') {
        if (col.has(board[j][i])) return false
        col.add(board[j][i])
      }

      // 横着每一列
      if (board[i][j] !== '.') {
        if (row.has(board[i][j])) return false
        row.add(board[i][j])
      }
    }

    // 小9格
    const block = new Set<string>()
    let x = (i / 3 >> 0) * 3
    let y = i % 3 * 3
    for (let j = 0; j < 9; j++) {
      if (board[x][y] !== '.') {
        if (block.has(board[x][y])) return false
        block.add(board[x][y])
      }
      y++
      if ((j + 1) % 3 === 0) {
        x++
        y -=3
      }
    }
  }
  return true
}