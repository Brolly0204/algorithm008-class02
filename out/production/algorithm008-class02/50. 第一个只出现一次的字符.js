const firstUniqChar = function(s) {
  for (let k of s) {
    if (s.indexOf(k) === s.lastIndexOf(k)) {
      return k
    }
  }
  return ' '
}

// 哈希表 普通对象
// const firstUniqChar = function(s) {
//   const dic = {}
//   for (let k of s) {
//     dic[k] = !dic.hasOwnProperty(k)
//     // dic[k] = dic.hasOwnProperty(k) ? false : true
//   }

//   for (let k of s) {
//     if (dic[k]) return k
//   }
//   return ' '
// }

// map
const firstUniqChar = function(s) {
  const map = new Map()
  for (let k of s) {
    map.set(k, !map.has(k))
  }

  for (let [k, val] of map) {
    if (val) return k
  }
  return ' '
}

console.log(firstUniqChar('abaccdeff')) // 'b'
