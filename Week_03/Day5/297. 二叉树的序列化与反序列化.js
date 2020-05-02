"use strict";
exports.__esModule = true;
var BinarySearchTree_1 = require("../BinarySearchTree");
var serialize = function (root) {
  var rserialize = function (node, str) {
    if (node == null) {
      str += '#,';
    } else {
      str += node.val + ",";
      str = rserialize(node.left, str);
      str = rserialize(node.right, str);
    }
    return str;
  };
  return rserialize(root, '');
};
var deserialize = function (series) {
  var rdeserialize = function (list) {
    if (list[0] === '#') {
      list.shift();
      return null;
    }
    var root = new BinarySearchTree_1.TreeNode(list.shift());
    root.left = rdeserialize(list);
    root.right = rdeserialize(list);
    return root;
  };
  return rdeserialize(series.split(','));
};
var root = new BinarySearchTree_1.TreeNode(1);
root.left = new BinarySearchTree_1.TreeNode(2);
root.right = new BinarySearchTree_1.TreeNode(3);
root.right.left = new BinarySearchTree_1.TreeNode(4);
root.right.right = new BinarySearchTree_1.TreeNode(5);
var series = serialize(root);
console.log(series);
console.log(deserialize(series));
