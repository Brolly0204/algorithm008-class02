// const fib = (n: number): number => {
//   return n <= 1 ? n : (fib(n - 1) + fib(n - 2))
// }

// const fib = (n: number, memo: number[] = []): number => {
//   if (n <= 1) return n
//   if (!memo[n]) {
//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
//   }
//   return memo[n]
// }

const fib = (n: number): number => {
  const memo: number[] = [] 
  if (n <= 1) return n
  memo[0] = 0
  memo[1] = 1
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[n]
}

console.log(fib(10))
