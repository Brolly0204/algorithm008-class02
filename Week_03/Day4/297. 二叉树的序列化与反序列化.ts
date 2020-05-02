import {TreeNode} from "../BinarySearchTree";

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// const serialize = (root: TreeNode): string => {
//   let str = ''
//   const inorder = (node: TreeNode | null) => {
//     if (node == null) {
//       str += '.,'
//     } else {
//       str += node.val + ','
//       inorder(node.left)
//       inorder(node.right)
//     }
//   }
//   inorder(root)
//   return str
// };

/**
 * Decodes your encoded data to tree.
 *
 * @return {TreeNode}
 * @param root
 */
// const deserialize = (data: string): TreeNode | null => {
//   const reSerialize = (s: string[]): TreeNode | null => {
//     if (s[0] === '.') {
//       s.shift()
//       return null
//     }
//     const root: TreeNode = new TreeNode(s.shift())
//     root.left = reSerialize(s)
//     root.right = reSerialize(s)
//     return root
//   }
//   return reSerialize(data.split(','))
// }

const serialize = (root: TreeNode) => {
  let str: string = ''
  let stack: Array<TreeNode | null> = [root]
  while (stack.length > 0) {
     const node = stack.pop()
     if (node != null) {
       str += node.val + ','
       stack.push(node.right)
       stack.push(node.left)
     } else {
       str += '#,'
     }
  }
  return str
}

const deserialize = (series: string): TreeNode | null => {
  const serialize = (list: string[]): TreeNode | null => {
    if (list[0] === '#') {
      list.shift()
      return null
    }

    const root = new TreeNode(list.shift())
    root.left = serialize(list)
    root.right = serialize(list)
    return root
  }
  return serialize(series.split(','))
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)

const series = serialize(root)
console.log(series)
console.log(deserialize(series))
