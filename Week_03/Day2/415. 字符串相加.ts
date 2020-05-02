const addStrings = function (num1: string, num2: string): string {
  let i: number = num1.length - 1
  let j: number = num2.length - 1
  let c: number = 0
  let res: string = ''
  while (i >= 0 || j >= 0) {
    let n1: number = i >= 0 ? Number(num1[i]) : 0
    let n2: number = j >= 0 ? Number(num2[j]) : 0
    const tmp = n1 + n2 + c
    res = tmp % 10 + res
    c = Math.floor(tmp / 10)
    i--
    j--
  }
  if (c === 1) res = c + res
  return res
}
console.log(addString("9333852702227987", "85731737104263"))