import TreeNode from '../binaryTree/TreeNode';

const nums: Array<number | null> = [3, 9, 20, null, null, 15, 7]

const root = new TreeNode(nums[0])
root.left = new TreeNode(nums[1])
root.right = new TreeNode(nums[2])

root.right.left = new TreeNode(nums[5])
root.right.right = new TreeNode(nums[6])

type Node = TreeNode | null
type MaxDepth = (root: Node) => number
// const maxDepth: MaxDepth = function (root: Node) {
//   const dfs: (n: Node) => number = (node: Node) => {
//     if (node == null) return 0
//     const lh: number = dfs(node.left)
//     const rh = dfs(node.right)
//     return Math.max(lh, rh) + 1
//   }
//   return dfs(root)
// }

const maxDepth: MaxDepth = function (root: Node) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
console.log(maxDepth(root))