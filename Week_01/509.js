const fib = function(N) {
  if (N < 2) return N
  let a = 0
  let b = 1
  let c
  while (--N > 0) {
    c = a + b
    a = b
    b = c
  }
  return c
}

console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))
