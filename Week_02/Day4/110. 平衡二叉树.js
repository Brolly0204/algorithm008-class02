"use strict";
exports.__esModule = true;
var TreeNode_1 = require("../binaryTree/TreeNode");
var root = new TreeNode_1["default"](3);
root.left = new TreeNode_1["default"](9);
root.right = new TreeNode_1["default"](20);
root.right.left = new TreeNode_1["default"](15);
root.right.right = new TreeNode_1["default"](7);
// const height: HeightFn = function (node: TreeNode | null) {
//   if (node == null) return -1
//   return 1 + Math.max(height(node.left), height(node.right))
// }
// const isBalanced: BalancedFn = function (root: TreeNode | null) {
//   if (root == null) return true
//   if (Math.abs(height(root.left) - height(root.right)) > 1) {
//     return false
//   }
//   return isBalanced(root.left) && isBalanced(root.right)
// }
// const isBalanced: BalancedFn = function (root: TreeNode | null) {
//   if (!root) {
//     return true
//   }
//   let isBalance: boolean = true
//   const height: HeightFn = (node) => {
//     if (node == null) return 0
//     // 计算左子树高度
//     const lh = height(node.left)
//     // 计算右子树高度
//     const rh = height(node.right)
//     // 如果当前节点的 左右子树高度差大于1 则不平衡
//     if (Math.abs(lh - rh) > 1) {
//       isBalance = false
//     }
//     // 将当前节点到子树的最大高度 + 当前节点距离上层节点高度 回溯上去  上层节点也要作为子节点进行高度比较
//     return 1 + Math.max(lh, rh)
//   }
//   height(root)
//   return isBalance
// }
var isBalanced = function (root) {
    if (root == null)
        return true;
    var height = function (node) {
        if (node == null)
            return 0;
        var lh = height(node.left);
        var rh = height(node.right);
        return Math.max(lh, rh) + 1;
    };
    var lh = height(root.left);
    var rh = height(root.right);
    if (Math.abs(lh - rh) > 1)
        return false;
    return isBalanced(root.left) && isBalanced(root.right);
};
console.log(isBalanced(root));
