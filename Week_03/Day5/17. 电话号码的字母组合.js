// const letterCombinations = (digits: string) => {
//   const phone = new Map<string, string>()
//   phone.set("2", "abc");
//   phone.set("3", "def");
//   phone.set("4", "ghi");
//   phone.set("5", "jkl");
//   phone.set("6", "mno");
//   phone.set("7", "pqrs");
//   phone.set("8", "tuv");
//   phone.set("9", "wxyz");
//
//   const backtrack = (combination: string, digits: string) => {
//     if (digits.length === 0) {
//       output.push(combination)
//     } else {
//       const digit: string = digits.substring(0, 1)
//       const letters: string = phone.get(digit) as string
//       for (let i = 0; i < letters.length; i++) {
//         const letter = letters.substring(i, i + 1)
//         backtrack(combination + letter, digits.substring(1))
//       }
//     }
//   }
//   const output: string[] = []
//   if (digits.length !== 0) {
//     backtrack('', digits)
//   }
//   return output
// }
var letterCombinations = function (digits) {
  // 创建hashmap
  var phone = new Map();
  phone.set("2", "abc");
  phone.set("3", "def");
  phone.set("4", "ghi");
  phone.set("5", "jkl");
  phone.set("6", "mno");
  phone.set("7", "pqrs");
  phone.set("8", "tuv");
  phone.set("9", "wxyz");
  var combine = function (combination, digits) {
    // terminator condition
    if (digits.length === 0) { // '23' -> ''
      output.push(combination);
      return;
    }
    // '23'-> '2' or '3'
    var digit = digits.slice(0, 1);
    // '2' -> phone.get('2') -> 'abc'
    var letters = phone.get(digit);
    for (var i = 0; i < letters.length; i++) {
      // 'abc' -> 0: 'a'
      // 'abc' -> 1: 'b'
      // 'abc' -> 2: 'c'
      // 获取当前的一个字母
      var letter = letters.slice(i, i + 1);
      // 用当前字母 和下一个 digit进行组合  digit -> '3'
      combine(combination + letter, digits.slice(1));
    }
  };
  var output = [];
  if (digits.length !== 0) {
    combine('', digits);
  }
  return output;
};
console.log(letterCombinations('23'));
