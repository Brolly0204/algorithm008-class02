// const hammingWeight = (n: number) => {
//   const str: string = n.toString(2)
//   let i = 0
//   for (let s of str) {
//     if (s === '1') i++
//   }
//   return i
// }

const hammingWeight = (n: number) => {
  let c = 0
  while (n !== 0) {
    c++
    n = n & (n - 1)
  }
  return c
}

console.log(hammingWeight(4))
