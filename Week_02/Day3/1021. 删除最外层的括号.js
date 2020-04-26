const removeOuterParentheses = function(S) {
  let result = ''
  let level = 0

  for (let s of S) {
    if (s === '(') {
      // 蜂左括号加一
      if (++level > 1) result += s
      // 逢右括号减一
    } else if (--level !== 0) {
      result += s
    }
  }
  return result
}

const removeOuterParentheses = function(S) {
  let result = ''
  let level = 0
  for (let s of S) {
    if (s === ')') --level
    if (level >= 1) result += s
    if (s === '(') ++level
  }
  return result
}

console.log(removeOuterParentheses('(()())(())'))
console.log(removeOuterParentheses('(()())(())(()(()))'))
console.log(removeOuterParentheses('()()'))
