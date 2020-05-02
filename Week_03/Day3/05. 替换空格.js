var replaceSpace = function (s) {
    var str = '';
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char === ' ') {
            str += '%20';
        }
        else {
            str += char;
        }
    }
    return str;
};
console.log(replaceSpace("We are happy."));
