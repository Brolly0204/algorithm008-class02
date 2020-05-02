type TNode = TreeNode | null

class TreeNode {
  public val: any
  public left: TNode
  public right: TNode
  constructor(val: any) {
    this.val = val
    this.left = this.right = null
  }
}

class BinarySearchTree {
  public root: TNode
  constructor() {
    this.root = null
  }

  public insert(val: number) {
    if (this.root == null) {
      this.root = new TreeNode(val)
    } else {
      this.insertNode(this.root, val)
    }
  }

  private insertNode(node: TreeNode, val: number) {
    if (val < (node.val as number)) {
      if (node.left) {
        this.insertNode(node.left, val)
      } else {
        node.left = new TreeNode(val)
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, val)
      } else {
        node.right = new TreeNode(val)
      }
    }
  }
}

export {
  TNode,
  TreeNode,
  BinarySearchTree
}
