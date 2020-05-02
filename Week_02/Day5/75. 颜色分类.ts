// const sortColors = function (nums: number[]): number[] {
//   const maxVal = Math.max.apply(null, nums)
//   const bucket: number[] = new Array(maxVal + 1)

//   for (let i = 0, len = nums.length; i < len; i++) {
//     const num = nums[i]
//     bucket[num] ? bucket[num]++ : bucket[num] = 1
//   }

//   let index: number = 0
//   for (let i = 0, bucketLen = bucket.length; i < bucket.length; i++) {
//     while (bucket[i] > 0) {
//       nums[index++] = i
//       bucket[i]--
//     }
//   }
//   return nums
// }

// 双指针

const sortColors = function (nums: number[]): number[] {
  let p0 = 0
  let p1 = nums.length - 1
  let cur = 0
  const swap = (arr: number[], i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]]
  while (cur <= p1) {
    if (nums[cur] === 0) {
      swap(nums, cur++, p0++)
    } else if (nums[cur] === 2) {
      swap(nums, cur, p1--)
    } else {
      cur++
    }
  }
  return nums
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))