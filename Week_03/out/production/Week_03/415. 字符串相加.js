var addStrings = function (num1, num2) {
    var i = num1.length - 1;
    var j = num2.length - 1;
    var c = 0;
    var res = '';
    while (i >= 0 || j >= 0) {
        var n1 = i >= 0 ? Number(num1[i]) : 0;
        var n2 = j >= 0 ? Number(num2[j]) : 0;
        var tmp = n1 + n2 + c;
        res = tmp % 10 + res;
        c = Math.floor(tmp / 10);
        i--;
        j--;
    }
    if (c === 1)
        res = c + res;
    return res;
};
console.log(addString("9333852702227987", "85731737104263"));
