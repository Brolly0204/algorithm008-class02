class TreeNode {
  val: any
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: any) {
    this.val = val
    this.left = this.right = null
  }
}

export default TreeNode