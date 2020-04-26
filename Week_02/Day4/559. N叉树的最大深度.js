var TreeNode = /** @class */ (function () {
    function TreeNode(val, children) {
        if (children === void 0) { children = []; }
        this.val = val;
        this.children = children;
    }
    return TreeNode;
}());
var maxDepth = function (root) {
    if (root == null)
        return 0;
    if (root.children.length === 0)
        return 1;
    var heights = [];
    root.children.forEach(function (child) {
        heights.push(maxDepth(child));
    });
    return Math.max.apply(null, heights) + 1;
};
// const maxDepth: MaxDepth = function (root) {
//   if (root == null) return 0
//   let height: number = 0
//   root.children.forEach(child => {
//     height = Math.max(height, maxDepth(child))
//   })
//   return height + 1
// }
var node5 = new TreeNode(5);
var node6 = new TreeNode(6);
var node3 = new TreeNode(3, [node5, node6]);
var node2 = new TreeNode(2);
var node4 = new TreeNode(4);
var root = new TreeNode(1, [node3, node2, node4]);
console.log(maxDepth(root));
