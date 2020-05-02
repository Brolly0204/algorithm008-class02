const addStrings = function (num1: string, num2: string): string {
  let i: number = num1.length - 1
  let j: number = num2.length - 1
  let c: number = 0
  let sum: string = ''
  while (i >= 0 || j >= 0) {
    const n1 = i >= 0 ? Number(num1[i]) : 0
    const n2 = j >= 0 ? Number(num2[j]) : 0
    const tmp = n1 + n2 + c
    // 计算当前位
    sum = (tmp % 10) + sum
    // 计算进位
    c = Math.floor(tmp / 10)
    i--
    j--
  }
  if (c === 1) {
    sum = `${c}${sum}`
  }
  return sum
}

console.log(addStrings("9333852702227987", "85731737104263"))
export { }