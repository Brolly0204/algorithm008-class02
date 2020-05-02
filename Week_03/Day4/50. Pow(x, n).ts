// const myPow = function(x: number, n: number): number {
//   // 处理负数幂  = x的倒数的正数幂(-n)
//   if (n < 0) {
//     x = 1 / x
//     n = -n
//   }
//
//   const fastPow = (x: number, n: number): number => {
//     if (n === 0) return 1
//     // 2^4 = 2^2 * 2^2  2^2 = 2^1 * 2^1
//     const half: number = fastPow(x, ~~(n / 2))
//     // n为奇数幂时 如 2^5 = 2^2 * 2^2 * 2
//     if (n % 2) {
//       return  half * half * x
//     }
//     // n为偶数时 如 2^4 = 2^2 * 2^2
//     return half * half
//   }
//   return fastPow(x, n)
// }

// time: O(log n)
// space: O(log n)
// console.log(myPow(2.00000, 10))

// 循环
const myPow = (x: number, n:number): number => {
  if (n < 0) {
    n = -n
    x = 1 / x
  }

  let ans: number = 1
  let curX: number = x
  for (let i = n; i > 0; i = ~~(i/2)) {
    if (i % 2) {
      ans *= curX
    }
    curX = curX * curX
  }
  return ans
}
console.log(myPow(2.00000, 10));
