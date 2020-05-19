// const plusOne = function(digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] !== 9) {
//       digits[i]++
//       return digits
//     }
//     digits[i] = 0
//   }
//   digits.unshift(1)
//   return digits
// }

// const plusOne = function(digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i]++
//     digits[i] %= 10
//     if (digits[i] !== 0) {
//       return digits
//     }
//   }
//   digits.unshift(1)
//   return digits
// }

// const plusOne = function(digits) {
//   const len = digits.length
//   for (let i = len - 1; i >= 0; i--) {
//     digits[i]++
//     digits[i] %= 10
//     if (digits[i] !== 0) {
//       return digits
//     }
//   }
//   digits = new Array(len + 1).fill(0)
//   digits[0] = 1
//   return digits
// }

// const plusOne = function(digits) {
//   const len = digits.length
//   for (let i = len - 1; i >= 0; i--) {
//     digits[i]++
//     digits[i] %= 10
//     if (digits[i] !== 0) {
//       return digits
//     }
//   }
//   digits.unshift(1)
//   return digits
// }

const plusOne = function(digits) {
  const len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i]++ !== 9) {
      return digits
    }
    digits[i] = 0
  }
  digits.unshift(1)
  return digits
}

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9, 9]))
console.log(plusOne([9, 9, 9]))
