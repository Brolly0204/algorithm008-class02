const solveNQueens = (n: number): string[][] => {
  const ans:  Array<Array<number>> = []
  const dfs = (nums: Array<number>, row: number) => {
    if (row === n) {
      ans.push([...nums])
      return
    }

    for (let j = 0; j < n; j++) {
      nums[row] = j
      if (valid(nums, row)) {
        dfs(nums, row + 1)
      }
    }
  }

  const valid = (nums: Array<number>, row: number) => {
    // 遍历前面已存放了queen的行
    for (let i = 0; i < row; i++) {
      // 行数绝对值之差 绝对值 === 两个行列数绝对值之差 则说明在对角线上（pie/na）
      // abs(i - row) === abs(nums[i] - nums[row])
      // 在对角线上 || 两行存放queen列号相等 说明在一列上
      if (Math.abs(nums[i] - nums[row]) === Math.abs(i - row) || nums[i] === nums[row]) {
        return false
      }
    }
    return true
  }

  dfs(Array(n).fill(null), 0)

  const result: string[][] = Array.from({ length: ans.length }, () => [])
  for (let i = 0, len = ans.length; i < len; i++) {
    ans[i].forEach(col => {
      let tmp: string = ''
      tmp = ('.').repeat(n)
      const row = tmp.slice(0, col) + 'Q' + tmp.slice(col + 1)
      result[i].push(row)
    })
  }
  return result
}

console.log(solveNQueens(4))

export {}
