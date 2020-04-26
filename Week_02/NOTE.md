## 学习笔记

### 哈希表、映射、集合

#### 哈希表

> 哈希表 key-value key 通过计算出 Hash code 通过散列函数映射到哈希表中 会出现哈希碰撞（可以通过链表形式解决）
> 哈希表未出现碰撞正常情况下 查询 O(1)，如果出现哈希碰撞有可能退化到 O(n)级别

时间复杂度正常情况下查询、插入、删除都是 O(1)， 通常用来用户信息存储、键值对存储等。

#### Map

> 映射表 key-value 形式，key 不重复

#### Set

> 集合不重复元素集合，单个元素不重复

### 二叉树

> 一个树结构包含一系列存在父子关系的节点。每个节点都有一个父节点（除了顶部的第一个节点）以及零个或多个子节点： 每个节点最后又两个子节点，一个是右子节点 一个是左子节点

#### 二叉搜索树(typescript)

> 时间复杂度 查询、插入、删除 O(log(n))

前序、中序、后序遍历

```ts
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
```

### 堆

> 一种抽象数据类型，有多种实现（二叉堆、斐波那契堆），通常用来快速查找一堆数中最大值或最小值，时间复杂度 查找最大值、最小值 O(1) 、删除/插入 O(logN)

#### 大顶堆

```java
 PriorityQueue<Integer> numbers = new PriorityQueue<>((a, b) -> (b - a));
```

#### 小顶堆

```java
 PriorityQueue<Integer> numbers = new PriorityQueue<>();
```

### 个人本周总结

对于二叉树、多叉树相关算法题一般都是递归，深度优先遍历、广度优先遍历，还不够熟练，还需自我加强。对于堆的实现以及应用已经理解，算法题还需加强。Map 映射表算法题中也比较常用。
