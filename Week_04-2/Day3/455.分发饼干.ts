
// const findContentChildren = function(g: number[], s: number[]): number {
//   g.sort((a, b) => a - b)
//   s.sort((a, b) => a - b)
//
//   let c: number = 0
//   let j = 0
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] >= g[j]) {
//       c++
//       j++
//     }
//   }
//   return c
// }

const findContentChildren = function(g: number[], s: number[]): number {
  let gi: number = 0
  let si: number = 0
  const glen = g.length
  const slen = s.length

  let c = 0
  while (gi < glen && si < slen) {
    if (s[si] >= g[gi]) {

    }
  }

  return c
}

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
