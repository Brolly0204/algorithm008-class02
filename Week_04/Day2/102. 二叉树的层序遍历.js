'use strict'
exports.__esModule = true
var binaryTree_1 = require('../binaryTree')
// const levelOrder = (root: TreeNode | null): number[][] => {
//   if (root === null) return []
//   const result: number[][] = []
//   // 创建队列
//   const queue: TreeNode[] = []
//   // 根节点入列
//   queue.push(root)
//   while (queue.length !== 0) {
//     // 存储当前层节点的值
//     const level: number[] = []
//     // 当前同层级节点个数
//     const len: number = queue.length
//     // 同层级节 依次出列
//     for (let i = 0; i < len; i++) {
//       // 当前节点
//       const temp: TreeNode = queue.shift() as TreeNode
//       // 当前节点左右子节点分别入列
//       if (temp.left !== null) {
//         queue.push(temp.left)
//       }
//       if (temp.right !== null) {
//         queue.push(temp.right)
//       }
//       // 存储当前节点的value
//       level.push(temp.val)
//     }
//     result.push(level)
//   }
//   return result
// }
var levelOrder = function(root) {
  if (root == null) return []
  var result = []
  var queue = [root]
  while (queue.length !== 0) {
    var len = queue.length
    var level = []
    while (len-- > 0) {
      var temp = queue.shift()
      level.push(temp.val)
      if (temp.left != null) {
        queue.push(temp.left)
      }
      if (temp.right != null) {
        queue.push(temp.right)
      }
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
