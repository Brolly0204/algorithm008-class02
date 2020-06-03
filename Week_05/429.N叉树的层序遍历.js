"use strict";
exports.__esModule = true;
var TreeNode = /** @class */ (function () {
  function TreeNode(val, children) {
    if (children === void 0) {
      children = [];
    }
    this.val = val;
    this.children = children;
  }

  return TreeNode;
}());
var levelOrder = function (root) {
  if (root == null)
    return [];
  var result = [];
  var queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    var len = queue.length;
    var level = [];
    while (len--) {
      var node = queue.shift();
      level.push(node.val);
      node.children.forEach(function (child) {
        return queue.push(child);
      });
    }
    result.push(level);
  }
  return result;
};
var five = new TreeNode(5);
var six = new TreeNode(6);
var three = new TreeNode(3, [five, six]);
var two = new TreeNode(2);
var four = new TreeNode(4);
var top = new TreeNode(1, [three, two, four]);
console.log(levelOrder(top));
