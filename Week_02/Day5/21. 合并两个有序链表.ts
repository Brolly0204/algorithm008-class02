import ListNode from './LinkList'

const mergeTwoLists = function (l1: ListNode, l2: ListNode): ListNode | null {
  const dummyHead = new ListNode(-1)
  let prev = dummyHead
  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next as ListNode
    } else {
      prev.next = l2
      l2 = l2.next as ListNode
    }
    prev = prev.next
  }
  // 处理多余部分
  prev.next = l1 == null ? l2 : l1
  return dummyHead.next
}
const linkList1 = new ListNode(1)
linkList1.next = new ListNode(4)
linkList1.next.next = new ListNode(5)
const linkList2 = new ListNode(1)
linkList2.next = new ListNode(3)
linkList2.next.next = new ListNode(4)
console.log(mergeTwoLists(linkList1, linkList2))
