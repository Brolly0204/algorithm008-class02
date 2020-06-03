
class TreeNode {
  public val: number
  public children: TreeNode[]
  constructor(val: number, children: TreeNode[] = []) {
    this.val = val
    this.children = children
  }
}

const levelOrder = function(root: TreeNode): number[][] {
  if (root == null) return []
  const result: number[][] = []
  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length !== 0) {
    let len: number = queue.length
    const level: number[] = []
    while (len--) {
      const node = queue.shift() as TreeNode
      level.push(node.val)
      node.children.forEach(child => queue.push(child))
    }
    result.push(level)
  }
  return result
}

const five = new TreeNode(5)
const six = new TreeNode(6)
const three = new TreeNode(3, [five, six])
const two = new TreeNode(2)
const four = new TreeNode(4)
const top = new TreeNode(1, [three, two, four])
console.log(levelOrder(top))

export {}
