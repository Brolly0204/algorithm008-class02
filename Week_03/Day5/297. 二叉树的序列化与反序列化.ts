import {TNode, TreeNode} from "../BinarySearchTree";

const serialize = (root: TreeNode): string => {
  const rserialize = (node: TNode, str: string): string => {
    if (node == null) {
      str += '#,'
    } else {
      str += `${node.val},`
      str = rserialize(node.left, str)
      str = rserialize(node.right, str)
    }
    return str
  }
  return rserialize(root, '')
}

const deserialize = (series: string): TNode => {
  const rdeserialize = (list: string[]): TNode => {
    if (list[0] === '#') {
      list.shift()
      return null
    }

    const root = new TreeNode(list.shift())
    root.left = rdeserialize(list)
    root.right = rdeserialize(list)
    return root
  }
  return rdeserialize(series.split(','))
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)

const series = serialize(root)
console.log(series)
console.log(deserialize(series))
