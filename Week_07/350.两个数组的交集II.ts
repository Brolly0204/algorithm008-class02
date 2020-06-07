// const intersect = (nums1: number[], nums2: number[]): number[] => {
//   const sect: number[] = []
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   let i = 0
//   let j = 0

//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] === nums2[j]) {
//       sect.push(nums1[i])
//       i++
//       j++
//     } else if (nums1[i] < nums2[j]) {
//       i++
//     } else {
//       j++
//     }
//   }
//   return sect
// }

const intersect = (nums1: number[], nums2: number[]): number[] => {
  const sect: number[] = []
  const map = new Map<number, number>()
  nums1.forEach(n => {
    map.set(n, (map.get(n) || 0) + 1)
  })

  nums2.forEach(n => {
    let c = map.get(n) || 0
    if (c > 0) {
      sect.push(n)
      map.set(n, --c)
    }
  })
  return sect
}

console.log(intersect([1, 2, 2, 1], [2]))
console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
