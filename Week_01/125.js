// const isPalindrome = function(s) {
//   if (s.length === 0) return true

//   const str = s.toLowerCase().replace(/[^\da-z]/gi, '')
//   const mid = Math.ceil(str.length / 2)
//   const s1 = str
//     .slice(0, mid)
//     .split('')
//     .reverse()
//     .join('')
//   if (str.length % 2 === 1) {
//     return s1 === str.slice(mid - 1)
//   } else {
//     return s1 === str.slice(mid)
//   }
// }

const isPalindrome = function(s) {
  if (s.length === 0) return true
  const s1 = s.toLowerCase().replace(/[^\da-z]/gi, '')
  const s2 = s1
    .split('')
    .reverse()
    .join('')
  return s1 === s2
}
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('naan'))
