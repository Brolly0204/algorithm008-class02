var findContentChildren = function (g, s) {
    g.sort(function (a, b) { return a - b; });
    s.sort(function (a, b) { return a - b; });
    var c = 0;
    var j = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] >= g[j]) {
            c++;
            j++;
        }
    }
    return c;
};
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
