function solve(board: string[][]): void {
  if (board == null || board.length === 0) return

  const row = board.length
  const col = board[0].length

  const dfs = (chars: string[][], i: number, j: number): void => {
    if (i < 0 || j < 0 || i >= chars.length || j >= chars[0].length || board[i][j] === 'X' || board[i][j] === '#') {
      return
    }
    board[i][j] = '#'
    dfs(board, i - 1, j)
    dfs(board, i + 1, j)
    dfs(board, i, j - 1)
    dfs(board, i, j + 1)
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const isEdge: boolean = i === 0 || j === 0 || i === row - 1 || j === col - 1
      if (isEdge && board[i][j] === 'O') {
        dfs(board, i, j)
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }

      if (board[i][j] === '#') {
        board[i][j] = 'O'
      }
    }
  }
}
