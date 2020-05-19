// const reverseOnlyLetters = function(S) {
//   const stack = S.match(/[a-z]/gi)
//   const result = []
//   const reg = /[a-z]/i
//   for (let s of S) {
//     result.push(reg.test(s) ? stack.pop() : s)
//   }
//   return result.join('')
// }

// const reverseOnlyLetters = function(S) {
//   const reg = /[a-z]/i
//   const stack = []
//   for (let s of S) {
//     reg.test(s) && stack.push(s)
//   }

//   let str = ''
//   for (let s of S) {
//     str += reg.test(s) ? stack.pop() : s
//   }
//   return str
// }

// const reverseOnlyLetters = function(S) {
//   const reg = /[a-z]/i
//   const stack = []
//   for (let s of S) {
//     reg.test(s) && stack.push(s)
//   }

//   const str = S.replace(/[a-z]/gi, () => stack.pop())
//   return str
// }

// 双指针 + 两两交换
// const reverseOnlyLetters = function(S) {
//   let i = 0
//   let j = S.length - 1
//   const reg = /[a-z]/i
//   const sArr = S.split('')
//   while (i < j) {
//     if (!reg.test(sArr[i])) {
//       i++
//     } else if (!reg.test(sArr[j])) {
//       j--
//     } else {
//       ;[sArr[i], sArr[j]] = [sArr[j], sArr[i]]
//       i++
//       j--
//     }
//   }
//   return sArr.join('')
// }

// const reverseOnlyLetters = function(S) {
//   const stack = []
//   let j = S.length - 1
//   const reg = /[a-z]/i
//   for (let s of S) {
//     if (reg.test(s)) {
//       while (!reg.test(S[j])) {
//         j--
//       }
//       stack.push(S[j--])
//     } else {
//       stack.push(s)
//     }
//   }
//   return stack.join('')
// }

const reverseOnlyLetters = function(S) {
  let l = -1
  let r = S.length
  const arr = S.split('')
  const reg = /[a-z]/i
  while (l++ < r--) {
    while (l < r && !reg.test(S[l])) l++
    while (l < r && !reg.test(S[r])) r--
    if (l < r) {
      ;[arr[l], arr[r]] = [arr[r], arr[l]]
    }
  }
  return arr.join('')
}

// "dc-ba"
console.log(reverseOnlyLetters('ab-cd'))
