// const isAnagram = function (s: string, t: string): boolean {
//   if (s.length !== t.length) return false

//   const map = new Map<string, number>()
//   for (let k of s) {
//     map.set(k, map.has(k) ? (map.get(k) as number) + 1 : 1)
//   }

//   for (let k of t) {
//     if (map.has(k)) {
//       map.set(k, (map.get(k) as number) - 1)
//       if ((map.get(k) as number) < 0) {
//         return false
//       }
//     } else {
//       return false
//     }
//   }
//   return true
// };

// const isAnagram = (s: string, t: string): boolean => {
//   if (s.length !== t.length) return false
//   const ans: number[] = Array(26).fill(0)
//   const aCode = 'a'.charCodeAt(0)
//   for (let i = 0, len = s.length; i < len; i++) {
//     ans[s.charCodeAt(i) - aCode]++
//     ans[t.charCodeAt(i) - aCode]--
//   }

//   for (let item of ans) {
//     if (item !== 0) return false
//   }
//   return true
// }
interface Dic {
  [propName: string]: number
}

// const isAnagram = (s: string, t: string): boolean => {
//   if (s.length !== t.length) return false
//   const dic: Dic = {}
//   for (let k of s) {
//     dic[k] ? dic[k]++ : dic[k] = 1
//   }

//   for (let k of t) {
//     if (dic[k]) {
//       if (--dic[k] < 0) return false
//     } else {
//       return false
//     }
//   }
//   return true
// }

const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false
  const map = new Map<string, number>()
  for (let k of s) {
    map.set(k, map.has(k) ? (map.get(k) as number) + 1 : 1)
  }

  for (let k of t) {
    if (map.has(k)) {
      map.set(k, (map.get(k) as number) - 1)
      if ((map.get(k) as number) < 0) return false
    } else {
      return false
    }
  }
  return true
}

console.log(isAnagram("anagram", "nagaram"))