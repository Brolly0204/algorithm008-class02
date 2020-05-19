// const mySqrt = (x: number) => {
//   if (x === 0 || x === 1) return x

//   let left = 0
//   let right = x
//   while (left <= right) {
//     const mid = left + ~~((right - left) / 2)
//     if ((mid ** 2) > x) {
//       right = mid - 1
//     } else {
//       left = mid + 1
//     }
//   }
//   return right
// }

// const mySqrt = (x: number) => {
//   if (x === 0 || x === 1) return x

//   let r = x

//   while (r ** 2 > x) {
//     r = ~~((r + x / r) / 2)
//   }
//   return r
// }

const mySqrt = (x: number) => {
  if (x === 0 || x === 1) return x
  let left = 0
  let right = x

  while (left <= right) {
    const mid = left + ~~((right - left) / 2)
    if (mid ** 2 > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right
}

console.log(mySqrt(8))
console.log(mySqrt(4))

export {}
