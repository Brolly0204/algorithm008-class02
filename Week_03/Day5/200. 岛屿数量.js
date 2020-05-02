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
var numIslands = function (grid) {
  var rn = grid.length;
  if (rn === 0)
    return 0;
  var cn = grid[0].length;
  var landsNum = 0;
  for (var i = 0; i < rn; i++) {
    for (var j = 0; j < cn; j++) {
      if (grid[i][j] === '0')
        continue;
      ++landsNum;
      var queue = [];
      queue.push({r: i, c: j});
      while (queue.length) {
        var rc = queue.shift();
        var row = rc.r;
        var col = rc.c;
        if (row - 1 >= 0 && grid[row - 1][col] === '1') {
          queue.push({
            r: row - 1,
            c: col
          });
          grid[row - 1][col] = '0';
        }
        if (row + 1 < rn && grid[row + 1][col] === '1') {
          queue.push({
            r: row + 1,
            c: col
          });
          grid[row + 1][col] = '0';
        }
        if (col - 1 >= 0 && grid[row][col - 1] === '1') {
          queue.push({
            r: row,
            c: col - 1
          });
          grid[row][col - 1] = '0';
        }
        if (col + 1 < cn && grid[row][col + 1] === '1') {
          queue.push({
            r: row,
            c: col + 1
          });
          grid[row][col + 1] = '0';
        }
      }
    }
  }
  return landsNum;
};
var lands1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];
var lands2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];
console.log(numIslands(lands1)); // 1
console.log(numIslands(lands2)); // 3
