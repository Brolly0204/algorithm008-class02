'use strict'
exports.__esModule = true
var binaryTree_1 = require('../binaryTree')
var levelOrder = function(root) {
  var result = []
  if (root == null) return result
  var queue = [root]
  while (queue.length !== 0) {
    var level = []
    var len = queue.length
    for (var i = 0; i < len; i++) {
      var node = queue.shift()
      if (node.left != null) {
        queue.push(node.left)
      }
      if (node.right != null) {
        queue.push(node.right)
      }
      level.push(node.val)
    }
    result.push(level)
  }
  return result
}
var root = new binaryTree_1.TreeNode(3)
root.left = new binaryTree_1.TreeNode(9)
root.right = new binaryTree_1.TreeNode(20)
root.right.left = new binaryTree_1.TreeNode(15)
root.right.right = new binaryTree_1.TreeNode(7)
var root2 = new binaryTree_1.TreeNode(1)
root2.left = new binaryTree_1.TreeNode(2)
root2.right = new binaryTree_1.TreeNode(3)
root2.left.left = new binaryTree_1.TreeNode(4)
root2.right.right = new binaryTree_1.TreeNode(5)
console.log(levelOrder(root))
console.log(levelOrder(root2))
