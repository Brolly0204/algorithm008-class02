const combine = (n: number, k: number): number[][] => {
  const dfs = (pos: number, list: number[]) => {
    if (list.length === k) {
      result.push(list.slice(0))
      return
    }

    // pos ~ 4
    let len = list.length
    for (let i = pos; i <= n - (k - len) + 1; i++) {
      list.push(i)
      dfs(i + 1, list)
      list.pop()
    }
  }
  const result: number[][] = []
  const list: number[] = []
  dfs(1, list)
  return result
}

console.log(combine(4, 2));
