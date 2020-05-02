var generateParenthesis = function (n) {
    var result = [];
    var generator = function (left, right, max, str) {
        if (left === max && right === max) {
            result.push(str);
            return;
        }
        if (left < max) {
            generator(left + 1, right, max, str + '(');
        }
        if (right < left) {
            generator(left, right + 1, max, str + ')');
        }
    };
    generator(0, 0, n, '');
    return result;
};
console.log(generateParenthesis(3));
