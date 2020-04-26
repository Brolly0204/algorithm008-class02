// const addDigits = function(num) {
//   while (num > 9) {
//     const str = num + ''
//     num = 0
//     for (let s of str) {
//       num += s * 1
//     }
//   }
//   return num
// }

// const addDigits = function(num) {
//   if (num < 10) return num

//   let n = 0
//   while (num !== 0) {
//     n += num % 10
//     num = ~~(num / 10)
//   }
//   return addDigits(n)
// }

const addDigits = function(num) {
  while (num > 9) {
    let n = 0
    while (num !== 0) {
      n += num % 10
      num = ~~(num / 10)
    }
    num = n
  }
  return num
}

console.log(addDigits(38))
