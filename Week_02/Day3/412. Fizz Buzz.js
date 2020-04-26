// const fizzBuzz = function(n) {
//   const result = []
//   let i = 0
//   while (++i <= n) {
//     if (i % 15 === 0) {
//       result.push('FizzBuzz')
//     } else if (i % 3 === 0) {
//       result.push('Fizz')
//     } else if (i % 5 === 0) {
//       result.push('Buzz')
//     } else {
//       result.push(i + '')
//     }
//   }
//   return result
// }

// const fizzBuzz = function(n) {
//   const result = []
//   for (let i = 1; i <= n; i++) {
//     const divisible3 = i % 3 === 0
//     const divisible5 = i % 5 === 0

//     let str = ''
//     if (divisible3) {
//       str += 'Fizz'
//     }

//     if (divisible5) {
//       str += 'Buzz'
//     }

//     if (str.length === 0) {
//       str += i
//     }

//     result.push(str)
//   }

//   return result
// }

// const fizzBuzz = function(n) {
//   const map = new Map([[3, 'Fizz'], [5, 'Buzz']])
//   const ans = []
//   for (let i = 1; i <= n; i++) {
//     let str = ''
//     for (let [key] of map) {
//       if (i % key === 0) {
//         str += map.get(key)
//       }
//     }

//     if (str.length === 0) {
//       str += i
//     }
//     ans[i - 1] = str
//   }
//   return ans
// }

const fizzBuzz = function(n) {
  const ans = []
  for (let i = 1; i <= n; i++) {
    let str = ''
    i % 3 === 0 && (str += 'Fizz')
    i % 5 === 0 && (str += 'Buzz')
    str === '' && (str += i)
    ans[i - 1] = str
  }
  return ans
}
console.log(fizzBuzz(15))
