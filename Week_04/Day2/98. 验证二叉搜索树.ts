import { TreeNode, TNode, BinarySearchTree } from "../BinarySearchTree";

const isValidBST = (root: TNode): boolean => {
  const valid = (root: TNode, min: number, max: number): boolean => {
    if (root == null) return true
    if (root.val <= min || root.val >= max) return false
    return valid(root.left, min, root.val) && valid(root.right, root.val, max)
  }
  return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

const rootNode: BinarySearchTree = new BinarySearchTree()
const arr = [2, 1, 3]
arr.forEach(item => rootNode.insert(item))
console.log(isValidBST(rootNode.root));