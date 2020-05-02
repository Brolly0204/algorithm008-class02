"use strict";
exports.__esModule = true;
var BinarySearchTree_1 = require("../BinarySearchTree");
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// const serialize = (root: TreeNode): string => {
//   let str = ''
//   const inorder = (node: TreeNode | null) => {
//     if (node == null) {
//       str += '.,'
//     } else {
//       str += node.val + ','
//       inorder(node.left)
//       inorder(node.right)
//     }
//   }
//   inorder(root)
//   return str
// };
/**
 * Decodes your encoded data to tree.
 *
 * @return {TreeNode}
 * @param root
 */
// const deserialize = (data: string): TreeNode | null => {
//   const reSerialize = (s: string[]): TreeNode | null => {
//     if (s[0] === '.') {
//       s.shift()
//       return null
//     }
//     const root: TreeNode = new TreeNode(s.shift())
//     root.left = reSerialize(s)
//     root.right = reSerialize(s)
//     return root
//   }
//   return reSerialize(data.split(','))
// }
var serialize = function (root) {
  var str = '';
  var stack = [root];
  while (stack.length > 0) {
    var node = stack.pop();
    if (node != null) {
      str += node.val + ',';
      stack.push(node.right);
      stack.push(node.left);
    } else {
      str += '#,';
    }
  }
  return str;
};
var deserialize = function (series) {
  var serialize = function (list) {
    if (list[0] === '#') {
      list.shift();
      return null;
    }
    var root = new BinarySearchTree_1.TreeNode(list.shift());
    root.left = serialize(list);
    root.right = serialize(list);
    return root;
  };
  return serialize(series.split(','));
};
var root = new BinarySearchTree_1.TreeNode(1);
root.left = new BinarySearchTree_1.TreeNode(2);
root.right = new BinarySearchTree_1.TreeNode(3);
root.right.left = new BinarySearchTree_1.TreeNode(4);
root.right.right = new BinarySearchTree_1.TreeNode(5);
var series = serialize(root);
console.log(series);
console.log(deserialize(series));
