const generateParenthesis = function (n: number) {
  const result: string[] = []
  const generator = function (left: number, right: number, n: number, str: string) {
    if (left === n && right === n) {
      result.push(str)
      return
    }

    // 左括号
    if (left < n) {
      generator(left + 1, right,  n, str + '(')
    } 

    // 右括号数量不能少于left 并且先保证有left括号
    if (right < left) {
      generator( left, right + 1, n, str + ')')
    }
  }
  generator(0, 0, n, '')
  return result
}

console.log(generateParenthesis(3));
