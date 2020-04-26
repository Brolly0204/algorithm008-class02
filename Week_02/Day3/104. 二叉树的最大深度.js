"use strict";
exports.__esModule = true;
var TreeNode_1 = require("../binaryTree/TreeNode");
var nums = [3, 9, 20, null, null, 15, 7];
var root = new TreeNode_1["default"](nums[0]);
root.left = new TreeNode_1["default"](nums[1]);
root.right = new TreeNode_1["default"](nums[2]);
root.right.left = new TreeNode_1["default"](nums[5]);
root.right.right = new TreeNode_1["default"](nums[6]);
var maxDepth = function (root) {
    // let ans: number = 0
    var dfs = function (node) {
        if (node == null)
            return 0;
        var lh = dfs(node.left);
        var rh = dfs(node.right);
        // ans = Math.max(lh, rh) + 1
        return Math.max(lh, rh) + 1;
    };
    return dfs(root);
    // return ans
};
console.log(maxDepth(root));
