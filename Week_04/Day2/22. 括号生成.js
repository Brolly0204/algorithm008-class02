'use strict'
// const generateParenthesis = (n: number) => {
//   const result: string[] = []
//   const generate = (left: number, right: number, n: number, list: string) => {
//     if (left === n && right === n) {
//       result.push(list)
//       return
//     }
exports.__esModule = true
//     // 左边括号数量未超出
//     if (left < n) {
//       generate(left + 1, right, n, list + '(')
//     }
//     // 与左括号对称的右括号数量 如果少于左边括号 则拼接右边括号
//     if (right < left) {
//       generate(left, right + 1, n, list + ')')
//     }
//   }
//   generate(0, 0, n, '')
//   return result
// }
var generateParenthesis = function(n) {
  var result = []
  var generate = function(list, left, right) {
    // 左右括号都用完了
    if (left === 0 && right === 0) {
      result.push(list)
      return
    }
    // 左括号还没用完 就继续拼接
    if (left > 0) {
      generate(list + '(', left - 1, right)
    }
    // 如果左括号已经用的比右括号多（可用数量少于右括号） 就该拼接右括号
    if (left < right) {
      generate(list + ')', left, right - 1)
    }
  }
  generate('', n, n)
  return result
}
console.log(generateParenthesis(3))
