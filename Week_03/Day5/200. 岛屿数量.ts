// const numIslands = (grid: Array<Array<string>>) => {
//   const r: number = grid.length // 行数
//   if (r === 0) return 0
//   const c: number = grid[0].length // 列数
//   if (c === 0) return 0
//
//   const dfs = (grid: Array<Array<string>>, i: number, j: number) => {
//     if (i < 0 || j < 0 || i >= r || j >= c) return
//     if (grid[i][j] === '0') return
//     // 将当前已探索过的点'1' 置为'0'
//     grid[i][j] = '0'
//     // 继续遍历当前点的 上下左右的相邻点 如果是'1' 则将周边这些相邻的点都置为零
//     dfs(grid, i + 1, j) // 下
//     dfs(grid, i - 1, j) // 上
//     dfs(grid, i, j + 1) // 右
//     dfs(grid, i, j - 1) // 左
//   }
//
//   let landsNums: number = 0
//   for (let i = 0; i < r; i++) { // 每一行
//     for (let j = 0; j < c; j++) { // 每一列
//       // 判断网格中每一个点
//       if (grid[i][j] === '0') continue
//       // 如果该点是'1' 则进行深度优先遍历
//       dfs(grid, i, j)
//       // 岛屿数
//       landsNums++
//     }
//   }
//   return landsNums
// }

// 深度优先遍历
// const numIslands = (grid: string[][]): number => {
//   if (grid == null || grid.length === 0) return 0
//   const rn = grid.length
//   const cn = grid[0].length
//
//   const dfs = (grid: string[][], r: number, c: number): void => {
//     if (grid[r][c] === '0') return
//     grid[r][c] = '0'
//     if (r - 1 >= 0) dfs(grid,r - 1, c)
//     if (r + 1 < rn) dfs(grid,r + 1, c)
//     if (c - 1 >= 0) dfs(grid, r, c - 1)
//     if (c + 1 < cn) dfs(grid, r, c + 1)
//   }
//
//   let landsNum: number = 0
//   for (let i = 0; i < rn; i++) {
//     for (let j = 0; j < cn; j++) {
//       if (grid[i][j] === '1') {
//         // 对这个点进行上下左右深度优先搜索，将相邻的点'1' 置为0
//         // 因为相邻的点'1' 只能算作一个岛屿
//         dfs(grid, i, j)
//         // 启动深度优先搜索时 计数
//         landsNum++
//       }
//     }
//   }
//   return landsNum
// }

// 广度优先遍历
interface IQueue {
  r: number
  c: number
}

const numIslands = (grid: string[][]): number => {
  const rn: number = grid.length
  if (rn === 0) return 0
  const cn: number = grid[0].length

  let landsNum: number = 0
  for (let i = 0; i < rn; i++) {
    for (let j = 0; j < cn; j++) {
      if (grid[i][j] === '0') continue
      ++landsNum
      const queue: IQueue[] = []
      queue.push({r: i, c: j})
      while (queue.length) {
        const rc = queue.shift()
        const row: number = (rc as IQueue).r
        const col: number = (rc as IQueue).c
        if (row - 1 >= 0 && grid[row - 1][col] === '1') {
          queue.push({
            r: row - 1,
            c: col
          })
          grid[row - 1][col] = '0'
        }
        if (row + 1 < rn && grid[row + 1][col] === '1') {
          queue.push({
            r: row + 1,
            c: col
          })
          grid[row + 1][col] = '0'
        }
        if (col - 1 >= 0 && grid[row][col - 1] === '1') {
          queue.push({
            r: row,
            c: col - 1
          })
          grid[row][col - 1] = '0'
        }
        if (col + 1 < cn && grid[row][col + 1] === '1') {
          queue.push({
            r: row,
            c: col + 1
          })
          grid[row][col + 1] = '0'
        }
      }
    }
  }
  return landsNum
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
