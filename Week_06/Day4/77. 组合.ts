const combine = (n: number, k: number): number[][] => {
  const result: number[][] = []

  const helper = (digit: number = 1, list: number[] = []) => {
    if (list.length === k) {
      result.push(list.slice(0))
      return
    }
    
    for (let i = digit; i <= n; i++) {
      list.push(i)
      helper(i + 1, list)
      list.pop()
    }
  }
  helper()
  return result
}

console.log(combine(4, 2))
export {}
