import TreeNode from '../binaryTree/TreeNode'

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
console.log(root)

// 深度优先遍历 
// 对于每个节点 都要遍历左右两边节点 一直到叶子节点  然后将两边节点深度求和 算出所有路径中最大值
const diameterOfBinaryTree = function (root: TreeNode): number {
  let diameter = 0
  const dfs = (node: TreeNode | null): number => {
    if (node == null) return 0
    // 从上到下 从根到叶子节点 遍历每个节点的左右子树
    // 左子树最深深度
    const lh = dfs(node.left)
    // 右子树最深深度s
    const rh = dfs(node.right)
    // 左右两边遍历完后 计算两边和是否是当前最大路径 是就更新为最大值
    diameter = Math.max(diameter, lh + rh)
    // 将当前节点左右两边最深的那个路径 并且加上 当前节点距离上一层节点的路径1 返回给上一层节点做为参考值 
    return Math.max(lh, rh) + 1
  }
  dfs(root)
  return diameter
}

console.log(diameterOfBinaryTree(root))
