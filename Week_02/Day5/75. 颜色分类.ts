const sortColors = function (nums: number[]): number[] {
  const maxVal = Math.max.apply(null, nums)
  const bucket: number[] = new Array(maxVal + 1)

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    bucket[num] ? bucket[num]++ : bucket[num] = 1
  }

  let index: number = 0
  for (let i = 0, bucketLen = bucket.length; i < bucket.length; i++) {
    while (bucket[i] > 0) {
      nums[index++] = i
      bucket[i]--
    }
  }
  return nums
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))