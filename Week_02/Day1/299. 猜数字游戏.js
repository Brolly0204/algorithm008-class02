// const getHint = function(secret, guess) {
//   const secretArr = secret.split('')
//   let a = 0
//   let b = 0
//   const map = new Map()
//   for (let i = 0, len = secret.length; i < len; i++) {
//     const s = secret[i]
//     if (s === guess[i]) {
//       a++
//     }
//     map.set(s, map.has(s) ? map.get(s) + 1 : 1)
//   }

//   for (let s of guess) {
//     if (map.get(s) > 0) {
//       b++
//       map.set(s, map.get(s) - 1)
//     }
//   }
//   b -= a
//   return `${a}A${b}B`
// }

// const getHint = function(secret, guess) {
//   let a = 0
//   let b = 0
//   const map = new Map()
//   const gus = guess.split('')
//   for (let i = 0, j = 0, len = secret.length; i < len; i++) {
//     const s = secret[i]
//     if (s === gus[j]) {
//       a++
//       gus.splice(j, 1)
//     } else {
//       map.set(s, map.has(s) ? map.get(s) + 1 : 1)
//       j++
//     }
//   }

//   for (let s of gus) {
//     if (map.get(s) > 0) {
//       b++
//       map.set(s, map.get(s) - 1)
//     }
//   }
//   return `${a}A${b}B`
// }

// const getHint = function(secret, guess) {
//   let a = 0
//   let b = 0
//   const obj = {}
//   let gs = ''
//   for (let i = 0, len = secret.length; i < len; i++) {
//     const s = secret[i]
//     if (s === guess[i]) {
//       a++
//     } else {
//       obj[s] ? obj[s]++ : (obj[s] = 1)
//       gs += guess[i]
//     }
//   }

//   for (let s of gs) {
//     if (obj[s] > 0) {
//       b++
//       obj[s]--
//     }
//   }
//   return `${a}A${b}B`
// }

const getHint = function(secret, guess) {
  let a = 0
  let b = 0
  let gs = ''
  let dic = {}
  for (let i = 0, len = secret.length; i < len; i++) {
    const s = secret[i]
    if (s === guess[i]) {
      a++
    } else {
      gs += guess[i]
      dic[s] ? dic[s]++ : (dic[s] = 1)
    }
  }

  for (let s of gs) {
    if (dic[s] > 0) {
      b++
      dic[s]--
    }
  }
  return `${a}A${b}B`
}
// console.log(getHint('1807', '7810'))
console.log(getHint('1123', '0111'))
