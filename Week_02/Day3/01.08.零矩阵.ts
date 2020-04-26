interface ILc {
  l: number
  c: number
}

const setZeroes = function (matrix: Array<Array<number>>) {
  const len = matrix.length
  const zeros: Array<ILc> = []
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeros.push({
          l: i,
          c: j
        })
      }
    }
  }

  for (let i = 0; i < len; i++) {
    zeros.forEach(item => {
      matrix[i][item.c] = 0
      matrix[item.l].fill(0, 0)
    })
  }
  return matrix
}

console.log(setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]))
