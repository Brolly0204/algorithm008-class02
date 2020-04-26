import BinarySearchTree from './binarySearchTree'

const nums: number[] = [9, 3, 10, 6, 5, 14, 4, 8, 7, 13, 9]

const binaryTree = new BinarySearchTree()
binaryTree.insertArray(nums)

// console.log(JSON.stringify(binaryTree))

// console.log(binaryTree.root)
// binaryTree.inOrderTraverse((val) => {
//   console.log('inOrder', val)
// })

// binaryTree.preOrderTraverse(val => {
//   console.log('preOrder', val)
// })

// binaryTree.postOrderTraverse(val => {
//   console.log('postOrder', val)
// })

// console.log(binaryTree.min())
// console.log(binaryTree.max())

// console.log(binaryTree.search(6))
// console.log(binaryTree.search(11))

binaryTree.remove(6)
console.log(JSON.stringify(binaryTree.root))