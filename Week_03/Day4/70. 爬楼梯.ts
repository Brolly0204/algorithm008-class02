const climbStairs = function (n: number): number {
  const memo: number[] = []
  return climb_stairs(0, n, memo)
}

const climb_stairs = function (i: number, n: number, memo: number[]): number {
  if (i > n) {
    return 0
  }
  if (i === n) {
    return 1
  }

  if (memo[i] > 0) {
    return memo[i]
  }
  memo[i] = climb_stairs(i + 1, n, memo) + climb_stairs(i + 2, n, memo)
  return memo[i]
}

console.log(climbStairs(3));
