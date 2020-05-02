const generateParenthesis = (n: number): string[] => {
  const result: string[] = []
  const generator = (left: number, right: number, n: number, s: string) => {
    if (left === n && right === n) {
      result.push(s)
      return
    }
    if (left < n) {
      generator(left + 1, right, n, s + '(')
    }
    if (right < left) {
      generator(left, right + 1, n, s + ')')
    }
  }
  generator(0, 0, n, '')
  return result
}

console.log(generateParenthesis(3));
export {}
