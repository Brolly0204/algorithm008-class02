"use strict";
exports.__esModule = true;
var addStrings = function (num1, num2) {
    var i = num1.length - 1;
    var j = num2.length - 1;
    var c = 0;
    var sum = '';
    while (i >= 0 || j >= 0) {
        var n1 = i >= 0 ? Number(num1[i]) : 0;
        var n2 = j >= 0 ? Number(num2[j]) : 0;
        var tmp = n1 + n2 + c;
        // 计算当前位
        sum = (tmp % 10) + sum;
        // 计算进位
        c = Math.floor(tmp / 10);
        i--;
        j--;
    }
    if (c === 1) {
        sum = "" + c + sum;
    }
    return sum;
};
console.log(addStrings("9333852702227987", "85731737104263"));
