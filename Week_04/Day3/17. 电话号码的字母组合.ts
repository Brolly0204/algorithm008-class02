const letterCombinations = function (digits: string): string[] {
  if (digits.length === 0) return []
  const phone = new Map<string, string>()
  phone.set("2", "abc");
  phone.set("3", "def");
  phone.set("4", "ghi");
  phone.set("5", "jkl");
  phone.set("6", "mno");
  phone.set("7", "pqrs");
  phone.set("8", "tuv");
  phone.set("9", "wxyz");

  const combine = (s: string, result: string[], digits: string, phone: Map<string, string>) => {
    if (digits.length === 0) { // 'abc' -> ''
      result.push(s)
      return
    }

    const letters: string = phone.get(digits[0]) as string
    for (let letter of letters) {
      combine(s + letter, result, digits.slice(1), phone)
    }
  }

  let result: string[] = []
  combine('', result, digits, phone)

  return result
}

console.log(letterCombinations("23"))

export { }
