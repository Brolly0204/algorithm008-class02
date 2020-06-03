// const countSegments = (s: string): number => {
//   if (s.length === 0) return 0
//   let words: string[] = s.trim().split(/\s+/)
//   words = words.filter(word => word.length !== 0)
//   return words.length
// }

// const countSegments = (s: string): number => {
//   const matches = s.match(/\S+/g)
//   if (!matches) return 0 
//   return matches.length
// }

const countSegments = (s: string): number => {
  let count = 0
  for (let i = 0, len = s.length; i < len; i++) {
    if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
      count++
    }
  }
  return count
}

console.log(countSegments('Hello, my name is John'))
console.log(countSegments("love live! mu'sic forever"))
console.log(countSegments("                "))
// console.log(countSegments("The one-hour drama series Westworld is a dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged."))