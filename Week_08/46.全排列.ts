const permute = (nums: number[]): number[][] => {
  if (nums.length <= 1) return [nums]
  const permutes:number[][] = []
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    const others = nums.slice(0, i).concat(nums.slice(i + 1))
    permute(others).forEach(item => {
      permutes.push([num].concat(item))
    })
  }
  return permutes
}

console.log(permute([1, 2, 3]))
