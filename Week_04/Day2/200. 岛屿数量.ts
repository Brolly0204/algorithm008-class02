const numIslands = (grid: string[][]): number => {
  // 行数
  const rn: number = grid.length
  if (rn === 0) return 0
  // 列数
  const cn: number = grid[0].length

  // 深度优先遍历岛屿周边 夷为平地置为0
  const dfs = (grid: string[][], r: number, c: number): void => {
    // 边界判断
    if (r < 0 || c < 0 || r >= rn || c >= cn || grid[r][c] === '0') return
    grid[r][c] = '0'
    dfs(grid, r + 1, c) // 下 
    dfs(grid, r - 1, c) // 上 
    dfs(grid, r, c - 1) // 左 
    dfs(grid, r, c + 1) // 右
  }

  // 岛屿数
  let lands: number = 0
  // 遍历网格中每个点
  for (let i = 0; i < rn; i++) {
    for (let j = 0; j < cn; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j)
        ++lands
      }
    }
  }
  return lands
}

const lands1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

const lands2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]
console.log(numIslands(lands1)) // 1
console.log(numIslands(lands2)) // 3

export { }