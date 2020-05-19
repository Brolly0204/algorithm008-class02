var updateBoard = function (board: string[][], click: number[]) {
  const row: number = board.length
  const col: number = board[0].length
  // 周围坐标差
  const dirs: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ]

  // 计算E空地 周边地雷数量
  const countMineAround = (x: number, y: number): number => {
    let count: number = 0
    for (let i = 0, len = dirs.length; i < len; i++) {
      const [r, c] = dirs[i]
      const newX: number = x + r
      const newY: number = y + c
      // 如果越界 就略过
      if (newX < 0 || newY < 0 || newX >= row || newY >= col) continue
      if (board[newX][newY] === 'M') {
        count++
      }
    }
    return count
  }

  const helper = (x: number, y: number): void => {
    // 越界结束递归
    if (x < 0 || y < 0 || x >= row || y >= col) {
      return
    }

    // 点击的是地雷 标记为X 并停止递归
    if (board[x][y] === 'M') {
      board[x][y] = 'X'
      return
    }

    // 点击的如果是空方块E
    if (board[x][y] === 'E') {
      // 看看是不是地雷附近的方块儿
      const count: number = countMineAround(x, y)
      // 如果是地雷附近的方块儿 标记为地雷数量
      if (count > 0) {
        board[x][y] = count + ''
      } else { // 不是地雷附近的方块儿 标记为B
        board[x][y] = 'B'
        // 深度优先搜索周边所有 非地雷的相邻的方块标记为B
        for (let i = 0, len = dirs.length; i < len; i++) {
          const [r, c] = dirs[i]
          const newX: number = x + r
          const newY: number = y + c
          helper(newX, newY)
        }
      }
    }
  }

  helper(click[0], click[1])
  return board
}

const bd: string[][] = [
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E']
]

const click = [3, 0]
console.log(updateBoard(bd, click))
