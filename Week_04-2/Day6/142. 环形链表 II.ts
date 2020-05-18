import { ListNode } from '../../ListNode'

// const detectCycle = (head: ListNode) => {
//   const visited = new Set<ListNode>()

//   let node: ListNode | null = head
//   while (node != null) {
//     if (visited.has(node)) {
//       return node
//     }
//     visited.add(node)
//     node = node.next
//   }
//   return null
// }

// interface INode extends ListNode {
//   flag?: number
// }

// const detectCycle = (head: INode) => {
//   while (head && head.next) {
//     if (head.flag) {
//       return head
//     } else {
//       head.flag = 1
//       head = head.next
//     }
//   }
//   return null
// }

interface LNodeWithFlag extends ListNode {
  flag?: number
}

const detectCycle = (head: LNodeWithFlag) => {
  let node = head
  while (node && node.next) {
    if (node.flag) {
      return node
    }
    node.flag = 1
    node = node.next
  }
  return null
}

const root = new ListNode(3)
root.next = new ListNode(2)
root.next.next = new ListNode(0)
root.next.next.next = new ListNode(-4)
root.next.next.next.next = root.next

console.log(detectCycle(root))
