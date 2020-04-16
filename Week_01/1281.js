const subtractProductAndSum = function(n) {
  let add = 0
  let mul = 1
  while (n > 0) {
    const digest = n % 10
    add += digest
    mul *= digest
    n = ~~(n / 10)
  }
  return mul - add
}

console.log(subtractProductAndSum(234))
