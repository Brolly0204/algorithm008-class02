const maxSlidingWindow = function (nums: number[], k: number): number[] {
  const output: number[] = []
  for (let i = 0, len = nums.length; i < len - k + 1; i++) {
    let max = Number.MIN_SAFE_INTEGER
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j])
    }
    output[i] = max
  }
  return output
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
