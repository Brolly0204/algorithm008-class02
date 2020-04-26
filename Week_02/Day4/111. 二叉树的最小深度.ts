import TreeNode from '../binaryTree/TreeNode'

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

type Node = TreeNode | null

type DepthFn = (node: Node) => number
// const minDepth: DepthFn = function (root: Node) {
//   if (root == null) return 0
//   if (root.left && root.right) {
//     return Math.min(minDepth(root.left), minDepth(root.right)) + 1
//   } else {
//     return Math.max(minDepth(root.left), minDepth(root.right)) + 1
//   }
// }

const minDepth: DepthFn = function (root: Node) {
  if (root == null) return 0
  const queue: TreeNode[] = []
  queue.push(root as TreeNode)
  let depth = 0
  while (queue.length !== 0) {
    let numberOfNodes = queue.length
    while (numberOfNodes > 0) {
      const currentNode = queue.shift()
      if (currentNode?.left == null && currentNode?.right == null) {
        depth++
        return depth
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
      numberOfNodes--
    }
    depth++
  }
  return depth
}

console.log(minDepth(root))