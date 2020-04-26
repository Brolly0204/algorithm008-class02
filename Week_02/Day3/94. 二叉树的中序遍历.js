class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

const inorderTraversal = function(root) {
  const result = []
  const traversal = node => {
    if (node === null) return
    traversal(node.left)
    result.push(node.val)
    traversal(node.right)
  }
  traversal(root)
  return result
}

console.log(inorderTraversal(root))
