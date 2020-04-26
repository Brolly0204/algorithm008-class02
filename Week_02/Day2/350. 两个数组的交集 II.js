// const intersect = function(nums1, nums2) {
//   let i = 0
//   let j = 0
//   let res = []
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] === nums2[j]) {
//       res.push(nums1[i])
//       i++
//       j++
//     } else if (nums1[i] < nums2[j]) {
//       i++
//     } else {
//       j++
//     }
//   }
//   return res
// }

const intersect = function(nums1, nums2) {
  let k = 0
  const map = new Map()
  for (let s of nums1) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1)
  }

  for (let s of nums2) {
    if (map.get(s) > 0) {
      map.set(map.get(s) - 1)
      nums2[k++] = s
    }
  }
  return nums2.slice(0, k)
}

const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
console.log(intersect(nums1, nums2))
