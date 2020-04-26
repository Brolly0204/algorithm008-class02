import TreeNode from '../binaryTree/TreeNode';

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)


type BalancedFn = (node: TreeNode | null) => boolean
type HeightFn = (node: TreeNode | null) => number
// const height: HeightFn = function (node: TreeNode | null) {
//   if (node == null) return -1
//   return 1 + Math.max(height(node.left), height(node.right))
// }

// const isBalanced: BalancedFn = function (root: TreeNode | null) {
//   if (root == null) return true

//   if (Math.abs(height(root.left) - height(root.right)) > 1) {
//     return false
//   }
//   return isBalanced(root.left) && isBalanced(root.right)
// }

// const isBalanced: BalancedFn = function (root: TreeNode | null) {
//   if (!root) {
//     return true
//   }
//   let isBalance: boolean = true
//   const height: HeightFn = (node) => {
//     if (node == null) return 0
//     // 计算左子树高度
//     const lh = height(node.left)
//     // 计算右子树高度
//     const rh = height(node.right)
//     // 如果当前节点的 左右子树高度差大于1 则不平衡
//     if (Math.abs(lh - rh) > 1) {
//       isBalance = false
//     }
//     // 将当前节点到子树的最大高度 + 当前节点距离上层节点高度 回溯上去  上层节点也要作为子节点进行高度比较
//     return 1 + Math.max(lh, rh)
//   }

//   height(root)
//   return isBalance
// }

const isBalanced: BalancedFn = function (root) {
  if (root == null) return true
  const height: HeightFn = function (node) {
    if (node == null) return 0
    const lh = height(node.left)
    const rh = height(node.right)
    return Math.max(lh, rh) + 1
  }

  const lh = height(root.left)
  const rh = height(root.right)
  if (Math.abs(lh - rh) > 1) return false
  return isBalanced(root.left) && isBalanced(root.right)
}

console.log(isBalanced(root))
