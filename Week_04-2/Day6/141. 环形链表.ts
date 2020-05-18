import ListNode from '../../Week_02/Day5/LinkList'

// const hasCycle = (head: ListNode) => {
//   if (head == null || head.next == null) {
//     return false
//   }

//   let slow: ListNode | null = head
//   let fast: ListNode | null = head.next

//   while (slow !== fast) {
//     if (fast == null || fast.next == null) {
//       return false
//     }
//     slow = (slow as ListNode).next
//     fast = fast.next.next
//   }
//   return true
// }

type LNode = ListNode | null
const hasCycle = (head: ListNode) => {
  if (head == null || head.next == null) {
    return false
  }

  let slow: LNode = head
  let fast: LNode = head.next

  while (slow !== fast) {
    if (fast == null || fast.next == null) {
      return false
    }
    slow = (slow as ListNode).next
    fast = fast.next.next
  }
  return true
}

const root = new ListNode(3)
root.next = new ListNode(2)
root.next.next = new ListNode(0)
root.next.next.next = new ListNode(-4)
root.next.next.next.next = root.next
console.log(hasCycle(root))
