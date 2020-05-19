var lemonadeChange = function(bills) {
  var five = 0;
  var ten = 0;
  for (var _i = 0, bills_1 = bills; _i < bills_1.length; _i++) {
    var bill = bills_1[_i];
    if (bill === 5)
      five++;
    else if (bill === 10) {
      if (five === 0)
        return false;
      ten++;
      five--;
    } else {
      // 20 元
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
