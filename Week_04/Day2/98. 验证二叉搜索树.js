'use strict'
exports.__esModule = true
var BinarySearchTree_1 = require('../BinarySearchTree')
var isValidBST = function(root) {
  var valid = function(root, min, max) {
    if (root == null) return true
    if (root.val <= min || root.val >= max) return false
    return valid(root.left, min, root.val) && valid(root.right, root.val, max)
  }
  return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}
var rootNode = new BinarySearchTree_1.BinarySearchTree()
var arr = [2, 1, 3]
arr.forEach(function(item) {
  return rootNode.insert(item)
})
console.log(isValidBST(rootNode.root))
