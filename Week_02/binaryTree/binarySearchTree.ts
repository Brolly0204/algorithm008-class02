

class TreeNode {
  val: any
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: any) {
    this.val = val
    this.left = this.right = null
  }
}

// 节点类型
type Node = TreeNode | null

type CallBack = (val: any) => void
class BinarySearchTree {
  root: TreeNode | null
  constructor() {
    this.root = null
  }

  public insert(val: any) {
    const newNode: TreeNode = new TreeNode(val);
    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  public insertArray(arr: any[]) {
    arr.forEach((n) => this.insert(n))
  }

  private insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.val < node.val) {
      if (node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  private inOrderTraverseNode(node: Node, callBack: CallBack) {
    if (node == null) return
    this.inOrderTraverseNode(node.left, callBack)
    callBack(node.val)
    this.inOrderTraverseNode(node.right, callBack)
  }

  public inOrderTraverse(callBack: CallBack) {
    this.inOrderTraverseNode(this.root, callBack)
  }

  private preOrderTraverseNode(node: Node, callBack: CallBack) {
    if (node == null) return
    callBack(node.val)
    this.preOrderTraverseNode(node.left, callBack)
    this.preOrderTraverseNode(node.right, callBack)
  }

  public preOrderTraverse(callBack: CallBack) {
    this.preOrderTraverseNode(this.root, callBack)
  }

  private postOrderTraverseNode(node: Node, callBack: CallBack) {
    if (node == null) return
    this.postOrderTraverseNode(node.left, callBack)
    this.postOrderTraverseNode(node.right, callBack)
    callBack(node.val)
  }

  public postOrderTraverse(callBack: CallBack) {
    this.postOrderTraverseNode(this.root, callBack)
  }

  public min(): Node {
    return this.minNode(this.root)
  }

  private minNode(node: Node): Node {
    let current = node
    while (current?.left) {
      current = current.left
    }
    return current
  }

  public max(): Node {
    return this.maxNode(this.root)
  }

  private maxNode(node: Node): Node {
    let current = node
    while (current?.right) {
      current = current.right
    }
    return current
  }

  search(key: any) {
    return this.searchNode(this.root, key)
  }

  private searchNode(node: Node, key: any): boolean {
    if (node == null) return false
    if (key === node.val) return true
    if (key < node.val) {
      return this.searchNode(node.left, key)
    } else if (key > node.val) {
      return this.searchNode(node.right, key)
    }
    return false
  }

  public remove(key: any): void {
    this.root = this.removeNode(this.root, key)
  }

  private removeNode(node: Node, key: any): Node {
    if (node == null) return null

    if (key < node.val) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.val) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 叶子节点
      if (node.left == null && node.right == null) {
        return null
      }

      // 找到了要删除的节点
      // 情况一 要删除节点只有一个左节点时
      // if (node.left && node.right == null) {
      if (node.right == null) {
        node = node.left
        return node
      }

      // 情况二 要删除节点只有一个右节点时
      if (node.left == null) {
        node = node.right
        return node
      }

      // 情况三 要删除的节点 左右子树都存在时
      // 从当前要删除节点的右子树中 找到最小节点来替换当前节点
      const minNode = this.minNode(node.right)
      // 用最小节点替换当前要删除的节点
      node.val = minNode?.val
      // 在右子树中 移除已经用来替换的最小节点
      node.right = this.removeNode(node.right, minNode?.val)
      return node
    }
  }
}

export default BinarySearchTree
