'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var letterCombinations = function(digits) {
  if (digits.length === 0) return []
  var phone = new Map()
  phone.set('2', 'abc')
  phone.set('3', 'def')
  phone.set('4', 'ghi')
  phone.set('5', 'jkl')
  phone.set('6', 'mno')
  phone.set('7', 'pqrs')
  phone.set('8', 'tuv')
  phone.set('9', 'wxyz')
  var combine = function(s, result, digits, level, phone) {
    if (digits.length === 0) {
      // 'abc' -> ''
      result.push(s)
      return
    }
    var letters = phone.get(digits[0])
    for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
      var letter = letters_1[_i]
      combine(s + letter, result, digits.slice(1), level + 1, phone)
    }
  }
  var result = []
  combine('', result, digits, 0, phone)
  return result
}
console.log(letterCombinations('23'))
