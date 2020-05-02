import { TreeNode, TNode, BinarySearchTree } from "../BinarySearchTree";

// const isValidBST = function (root: TNode): boolean {
//   const stack: number[] = []
//   let result = true
//   const helper = function (node: TNode) {
//     if (node == null) return
//     helper(node.left)
//     if (node.val <= stack[stack.length - 1]) {
//       result = false
//     }
//     stack.push(node.val)
//     helper(node.right)
//
//   }
//   helper(root)
//   return result
// }

// const rootNode: BinarySearchTree = new BinarySearchTree()
// const arr = [2, 1, 3]
// arr.forEach(item => rootNode.insert(item))
// console.log(isValidBST(rootNode.root));
// const root: TreeNode = new TreeNode(5)
// root.left = new TreeNode(1)
// root.right = new TreeNode(4)
// root.right.left = new TreeNode(3)
// root.right.right = new TreeNode(6)

// const isValidBST = function (root: TNode): boolean {
//   const helper = function (node: TNode, lower: number | null, upper: number | null): boolean {
//     if (node == null) return true
//     const val = node.val
//     if (upper != null && val >= upper) return false
//     if (lower != null && val <= lower) return false
//     if (!helper(node.left, lower, val)) {
//       return false
//     }
//     return helper(node.right, val, upper)
//   }
//   return helper(root, null, null)
// }
// const root = new TreeNode(1)
// root.left = new TreeNode(1)
// console.log(root)
// console.log(isValidBST(root))

// const isValidBST = function (root: TNode) {
//   const stack: TreeNode[] = []
//   let inorder: number = Number.MIN_SAFE_INTEGER
//
//   let node: TNode = root
//   while (stack.length !== 0 || node !== null) {
//     while (node !== null) {
//       stack.push(node)
//       node = node.left
//     }
//     node = stack.pop() as TreeNode
//     if (node.val <= inorder) return false
//     inorder = node.val
//     node = node.right
//   }
//   return true
// }

const isValidBST = function (root: TNode): boolean {
  // 二叉搜索树： 左子树 < 根 < 右子树
  const isValid = function (root: TNode, min: number, max: number): boolean {
    if (root == null) return true
    // 当前节点如果超出上界值 或 小于下界值 则false
    if (root.val >= max || root.val <= min) return  false
    // 左子节点的上界为 当前父节点的值 下界为最小值min    右子节点的下界为当前父节点的值 上界为最大值max
    return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
  }
  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

const rootNode: BinarySearchTree = new BinarySearchTree()
const arr = [2, 1, 3]
arr.forEach(item => rootNode.insert(item))
console.log(isValidBST(rootNode.root));
