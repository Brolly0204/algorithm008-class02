import { ListNode } from '../LinkList';

// const mergeTwoLists = function (l1: ListNode, l2: ListNode) {
//   const dummy = new ListNode(-1)
//   let prev = dummy
//   while (l1 != null && l2 != null) {
//     if (l1.val < l2.val) {
//       prev.next = l1
//       l1 = l1.next as ListNode
//     } else {
//       prev.next = l2
//       l2 = l2.next as ListNode
//     }
//     prev = prev.next
//   }

//   // 处理剩余链表
//   prev.next = l1 == null ? l2 : l1
//   return dummy.next
// };

const mergeTwoLists = function (l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 == null) return l2
  if (l2 == null) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
const linkList1 = new ListNode(1)
linkList1.next = new ListNode(4)
linkList1.next.next = new ListNode(5)
const linkList2 = new ListNode(1)
linkList2.next = new ListNode(3)
linkList2.next.next = new ListNode(4)
console.log(JSON.stringify(mergeTwoLists(linkList1, linkList2)))