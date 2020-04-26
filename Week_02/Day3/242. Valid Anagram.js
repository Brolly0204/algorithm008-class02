const isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const counter = Array.from({ length: 26 }).fill(0)

  const a = 'a'.charCodeAt()
  for (let i = 0, l = s.length; i < l; i++) {
    counter[s.charCodeAt(i) - a]++
  }

  for (let i = 0, l = t.length; i < l; i++) {
    counter[t.charCodeAt(i) - a]--
    if (counter[t.charCodeAt(i) - a] < 0) {
      return false
    }
  }
  return true
}

const s = 'anagram',
  t = 'nagaram'
console.log(isAnagram(s, t))
