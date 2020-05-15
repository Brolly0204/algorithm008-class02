const findContentChildren = function (g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let i = 0
  let j = 0
  const gl = g.length
  const sl = s.length

  let res = 0
  while (i < gl && j < sl) {
    if (g[i] <= s[j]) {
      res += 1
      i++
      j++
    } else {
      j++
    }
  }
  return res
}

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))

export { }