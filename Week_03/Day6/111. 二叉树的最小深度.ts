import { TNode, TreeNode } from '../BinarySearchTree';

const minDepth = (root: TNode): number => {
  if (root === null) return 0

  if (root.left === null && root.right === null) return 1

  // 查找两边子树最小高度的一边
  let min: number = Number.MAX_SAFE_INTEGER
  if (root.left !== null) {
    min = Math.min(min, minDepth(root.left))
  }
  if (root.right !== null) {
    min = Math.min(min, minDepth(root.right))
  }
  // min 子树高度 + 距离的父节点高度1
  return min + 1
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(minDepth(root))