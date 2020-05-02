const subsets = (nums: number[]): number[][] => {
  let result: number[][] = [[]]
  for (let num of nums) {
    const newSets: number[][] = []
    for (let subset of result) {
      newSets.push(subset.concat([num]))
    }
    result = result.concat(newSets)
  }
  return result
}

console.log(subsets([1, 2, 3]));
