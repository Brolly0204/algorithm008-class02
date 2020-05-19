// const searchMatrix = (matrix: number[][], target: number) => {
//   if (matrix.length === 0) return false
//   const rl: number = matrix.length
//   const cl: number = matrix[0].length
//   for (let i = 0; i < rl; i++) {
//     const row: number[] = matrix[i]
//     if (target >= row[0] && target <= row[cl - 1]) {
//       let left = 0
//       let right = cl - 1
//       while (left <= right) {
//         const m = left + ~~((right - left) / 2)
//         const mid = row[m]
//         if (mid === target) return true
//         if (mid > target) {
//           right = m - 1
//         } else {
//           left = m + 1
//         }
//       }
//     }
//   }
//   return false
// }

const searchMatrix = (matrix: number[][], target: number) => {
  if (matrix.length === 0) return false
  const rl: number = matrix.length
  const cl: number = matrix[0].length

  for (let i = 0; i < rl; i++) {
    const row: number[] = matrix[i]
    if (row[0] === target || row[cl - 1] === target) {
      return true
    }

    if (target > row[0] && target < row[cl - 1]) {
      let left = 0
      let right = cl - 1
      while (left <= right) {
        const mid = left + ~~((right - left) / 2)
        const m = row[mid]
        if (m === target) return true
        if (target > m) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
    }
  }
  return false
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
const matrix2: number[][] = [[1, 3]]
const target = 3

console.log(searchMatrix(matrix, target))
console.log(searchMatrix(matrix2, target))
