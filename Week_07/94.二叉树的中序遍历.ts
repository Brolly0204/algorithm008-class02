class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val = 0, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

// 中序 left->root->right
const inorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = []
  if (root == null) return result
  const stack: TreeNode[] = []
  let node: TreeNode | null = root
  while (node || stack.length !== 0) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop() as TreeNode
    result.push(node!.val)
    node = node!.right
  }
  return result
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(inorderTraversal(root))
export {}