const minimumTotal = (triangle: number[][]): number => {
  const dp = new Array(triangle.length + 1).fill(0)
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i + 1; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }
  return dp[0]
}

console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]))
