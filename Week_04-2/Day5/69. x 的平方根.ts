const mySqrt = (x: number): number => {
  if (x === 0 || x === 1) return x

  let left = 1
  let right = x

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (mid ** 2 > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right
}

console.log(mySqrt(4))
console.log(mySqrt(8))
