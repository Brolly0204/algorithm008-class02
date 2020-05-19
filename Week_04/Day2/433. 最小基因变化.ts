
type Tuple = [string, number]
const minMutation = function (start: string, end: string, bank: string[]): number {
  const bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1
  const queue: Tuple[] = []
  queue.push([start, 0])
  const dna: string[] = ["A", "C", "G", "T"]
  while (queue.length !== 0) {
    const [s, count] = queue.shift() as Tuple
    if (s === end) return count
    for (let i = 0, il = s.length; i < il; i++) {
      for (let j = 0, jl = dna.length; j < jl; j++) {
        if (s[i] === dna[j]) continue
        const str = s.substring(0, i) + dna[j] + s.substring(i + 1)
        if (bankSet.has(str)) {
          queue.push([str, count + 1])
          bankSet.delete(str)
        }
      }
    }
  }
  return -1
};

// const start = "AACCGGTT"
// const end = "AACCGGTA"
// const bank = ["AACCGGTA"]

const start = "AAAAACCC"
const end = "AACCCCCC"
const bank = ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

console.log(minMutation(start, end, bank))
