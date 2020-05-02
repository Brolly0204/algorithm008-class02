var subsets = function (nums) {
    var result = [[]];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var newSets = [];
        for (var _a = 0, result_1 = result; _a < result_1.length; _a++) {
            var subset = result_1[_a];
            newSets.push(subset.concat([num]));
        }
        result = result.concat(newSets);
    }
    return result;
};
console.log(subsets([1, 2, 3]));
