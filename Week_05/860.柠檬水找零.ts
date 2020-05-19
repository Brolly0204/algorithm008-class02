const lemonadeChange = function(bills: number[]): boolean {
  let five: number = 0
  let ten: number = 0
  for (const bill of bills) {
    if (bill === 5) five++
    else if (bill === 10) {
      if (five === 0) return false
      ten++
      five--
    } else {
      // 20 元
      if (five > 0 && ten > 0) {
        five--
        ten--
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
  }
  return true
}
console.log(lemonadeChange([5, 5, 5, 10, 20]))
console.log(lemonadeChange([5, 5, 10, 10, 20]))
