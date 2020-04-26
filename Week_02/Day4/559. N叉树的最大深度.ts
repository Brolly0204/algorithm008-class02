
class TreeNode {
  val: any
  children: Array<TreeNode>
  constructor(val: any, children: Array<TreeNode> = []) {
    this.val = val
    this.children = children
  }
}

type MaxDepth = (node: TreeNode | null) => number
const maxDepth: MaxDepth = function (root) {
  if (root == null) return 0

  if (root.children.length === 0) return 1

  const heights: number[] = []
  root.children.forEach(child => {
    heights.push(maxDepth(child))
  })
  return Math.max.apply(null, heights) + 1
}

// const maxDepth: MaxDepth = function (root) {
//   if (root == null) return 0

//   let height: number = 0
//   root.children.forEach(child => {
//     height = Math.max(height, maxDepth(child))
//   })
//   return height + 1
// }

const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node3 = new TreeNode(3, [node5, node6])
const node2 = new TreeNode(2)
const node4 = new TreeNode(4)
const root: TreeNode = new TreeNode(1, [node3, node2, node4])
console.log(maxDepth(root))