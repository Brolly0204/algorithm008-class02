import { TreeNode } from '../binaryTree';

const levelOrder = (root: TreeNode): number[][] => {
  const result: number[][] = []
  if (root == null) return result

  const queue: TreeNode[] = [root]

  while (queue.length !== 0) {
    const level: number[] = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift() as TreeNode
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

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.right = new TreeNode(3)
root2.left.left = new TreeNode(4)
root2.right.right = new TreeNode(5)


console.log(levelOrder(root))
console.log(levelOrder(root2))