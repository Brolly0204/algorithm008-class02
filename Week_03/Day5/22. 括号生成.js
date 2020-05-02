"use strict";
exports.__esModule = true;
var generateParenthesis = function (n) {
    var result = [];
    var generator = function (left, right, n, s) {
        if (left === n && right === n) {
            result.push(s);
            return;
        }
        if (left < n) {
            generator(left + 1, right, n, s + '(');
        }
        if (right < left) {
            generator(left, right + 1, n, s + ')');
        }
    };
    generator(0, 0, n, '');
    return result;
};
console.log(generateParenthesis(3));
