"use strict";
exports.__esModule = true;
var BinarySearchTree_1 = require("../BinarySearchTree");
var minDepth = function (root) {
    if (root === null)
        return 0;
    if (root.left === null && root.right === null)
        return 1;
    // 查找两边子树最小高度的一边
    var min = Number.MAX_SAFE_INTEGER;
    if (root.left !== null) {
        min = Math.min(min, minDepth(root.left));
    }
    if (root.right !== null) {
        min = Math.min(min, minDepth(root.right));
    }
    // min 子树高度 + 距离的父节点高度1
    return min + 1;
};
var root = new BinarySearchTree_1.TreeNode(3);
root.left = new BinarySearchTree_1.TreeNode(9);
root.right = new BinarySearchTree_1.TreeNode(20);
root.right.left = new BinarySearchTree_1.TreeNode(15);
root.right.right = new BinarySearchTree_1.TreeNode(7);
console.log(minDepth(root));
