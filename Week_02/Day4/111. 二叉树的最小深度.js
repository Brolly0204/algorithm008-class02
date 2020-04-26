"use strict";
exports.__esModule = true;
var TreeNode_1 = require("../binaryTree/TreeNode");
var root = new TreeNode_1["default"](3);
root.left = new TreeNode_1["default"](9);
root.right = new TreeNode_1["default"](20);
root.right.left = new TreeNode_1["default"](15);
root.right.right = new TreeNode_1["default"](7);
// const minDepth: DepthFn = function (root: Node) {
//   if (root == null) return 0
//   if (root.left && root.right) {
//     return Math.min(minDepth(root.left), minDepth(root.right)) + 1
//   } else {
//     return Math.max(minDepth(root.left), minDepth(root.right)) + 1
//   }
// }
var minDepth = function (root) {
    var _a, _b;
    if (root == null)
        return 0;
    var queue = [];
    queue.push(root);
    var depth = 0;
    while (queue.length !== 0) {
        var numberOfNodes = queue.length;
        while (numberOfNodes > 0) {
            var currentNode = queue.shift();
            if (((_a = currentNode) === null || _a === void 0 ? void 0 : _a.left) == null && ((_b = currentNode) === null || _b === void 0 ? void 0 : _b.right) == null) {
                depth++;
                return depth;
            }
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            numberOfNodes--;
        }
        depth++;
    }
    return depth;
};
console.log(minDepth(root));
