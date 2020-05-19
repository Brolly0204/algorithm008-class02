const majorityElement = function (nums: number[]) {
  const most: number = ~~(nums.length / 2)
  const map = new Map<number, number>()
  for (let i = 0, len = nums.length; i < len; i++) {
    const cur: number = nums[i]
    map.set(cur, map.has(cur) ? (map.get(cur) as number) + 1 : 1)
    if ((map.get(cur) as number) > most) {
      return cur
    }
  }
}
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))