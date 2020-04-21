// const wordPattern = function(pattern, str) {
//   var arr = str.split(' ')
//   if (pattern.length != arr.length) return false
//   for (var i = 0; i < pattern.length; i++) {
//     if (pattern.indexOf(pattern[i]) != arr.indexOf(arr[i])) {
//       return false
//     }
//   }
//   return true
// }

// const wordPattern = function(pattern, str) {
//   const strArr = str.split(' ')
//   if (pattern.length !== strArr.length) return false

//   const patternMap = new Map()
//   const strMap = new Map()
//   for (let i = 0, len = pattern.length; i < len; i++) {
//     if (!patternMap.has(pattern[i])) {
//       patternMap.set(pattern[i], strArr[i])
//     } else if (patternMap.get(pattern[i]) !== strArr[i]) {
//       return false
//     }
//     if (!strMap.has(strArr[i])) {
//       strMap.set(strArr[i], pattern[i])
//     } else if (strMap.get(strArr[i]) !== pattern[i]) {
//       return false
//     }
//   }
//   return true
// }

// map and set
// const wordPattern = function(pattern, str) {
//   const strArr = str.split(' ')
//   if (pattern.length !== strArr.length) return false

//   const patternMap = new Map()
//   const strSet = new Set()
//   for (let i = 0, len = pattern.length; i < len; i++) {
//     if (!patternMap.has(pattern[i])) {
//       if (strSet.has(strArr[i])) {
//         return false
//       }
//       patternMap.set(pattern[i], strArr[i])
//       strSet.add(strArr[i])
//     } else if (patternMap.get(pattern[i]) !== strArr[i]) {
//       return false
//     }
//   }
//   return true
// }

const wordPattern = function(pattern, str) {
  const strArr = str.split(' ')
  if (pattern.length !== strArr.length) return false

  const wordToNumber = function(word) {
    const map = new Map()
    let result = ''
    for (let i = 0, len = word.length; i < len; i++) {
      const s = word[i]
      map.has(s) ? (result += map.get(s)) : map.set(s, i)
    }
    return result
  }

  return wordToNumber(pattern) === wordToNumber(strArr)
}

console.log(wordPattern('abba', 'dog cat cat dog'))
