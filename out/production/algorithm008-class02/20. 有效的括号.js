// const isValid = function(s) {
//   if (s.length === 0) return true
//   if (s.length === 1) return false
//   const map = new Map()
//   map.set('(', ')')
//   map.set('[', ']')
//   map.set('{', '}')
//   const stack = []
//   for (let k of s) {
//     if (map.has(k)) {
//       stack.push(k)
//     } else if (map.get(stack.pop()) !== k) {
//       return false
//     }
//   }
//   return stack.length === 0
// }

// const isValid = function(s) {
//   while (s.length) {
//     const oldS = s
//     s = s
//       .replace('()', '')
//       .replace('{}', '')
//       .replace('[]', '')
//     if (s === oldS) return false
//   }
//   return true
// }

// const isValid = function(s) {
//   const stack = []
//   for (let k of s) {
//     if (k === '(') {
//       stack.push(')')
//     } else if (k === '[') {
//       stack.push(']')
//     } else if (k === '{') {
//       stack.push('}')
//     } else if (stack.length === 0 || stack.pop() !== k) {
//       return false
//     }
//   }
//   return true
// }

const isValid = function(s) {
  const dict = new Map([['(', ')'], ['{', '}'], ['[', ']']])
  const stack = []

  for (let k of s) {
    if (dict.has(k)) {
      stack.push(k)
    } else if (stack.length === 0 || dict.get(stack.pop()) !== k) {
      return false
    }
  }
  return stack.length === 0
}

console.log(isValid(''))
console.log(isValid(']'))
console.log(isValid('(])'))
console.log(isValid('){'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
// console.log(isValid('([)]'))
console.log(isValid('{[]}'))
