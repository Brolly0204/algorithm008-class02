// const merge = function(nums1, m, nums2, n) {
//   if (nums1.length < m + n) return
//   if (nums2.length <= 0) return
//   nums11.push(Number.MAX_SAFE_INTEGER)
//   nums2.push(Number.MAX_SAFE_INTEGER)
//   for (let i = 0; i < m + n; i++) {
//     nums1[i] = nums11[0] < nums2[0] ? nums11.shift() : nums2.shift()
//   }
//   return nums1
// }

const merge = function(nums1, m, nums2, n) {
  if (nums1.length < m + n) return
  if (nums2.length <= 0) return
  const nums11 = nums1.slice(0, -n)
  nums11.push(Number.MAX_SAFE_INTEGER)
  nums2.push(Number.MAX_SAFE_INTEGER)
  let l1 = 0
  let l2 = 0
  for (let i = 0; i < m + n; i++) {
    nums1[i] = nums11[l1] < nums2[l2] ? nums11[l1++] : nums2[l2++]
  }
  return nums1
}

const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3
console.log(merge(nums1, m, nums2, n))
