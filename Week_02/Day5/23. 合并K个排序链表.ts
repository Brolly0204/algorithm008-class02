import ListNode from './LinkList'

// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
const linkList1 = new ListNode(1)
linkList1.next = new ListNode(4)
linkList1.next.next = new ListNode(5)
const linkList2 = new ListNode(1)
linkList2.next = new ListNode(3)
linkList2.next.next = new ListNode(4)
const linkList3 = new ListNode(2)
linkList3.next = new ListNode(6)
const lists = [linkList1, linkList2, linkList3]
// const mergeKLists = function <T>(lists: ListNode<T>[]): ListNode<T>{
//   const pq: ListNode[] = []
//   const compare = function () {
//     pq.sort((a, b) => b.val - a.val)
//   }
//   lists.forEach(list => list != null && pq.push(list))
//   compare()

//   const dummy = new ListNode(0)
//   let cur = dummy
//   while (pq.length) {
//     const node = (pq.pop() as ListNode<number>)
//     cur.next = node
//     cur = cur.next
//     if (node.next) {
//       pq.push(node.next)
//       compare()
//     }
//   }
//   return dummy.next
// }

const mergeKLists = function (lists: ListNode<number>[]): ListNode<number> | null {
  if (lists == null || lists.length === 0) return null
  return merge(lists, 0, lists.length - 1)
}

const merge = function <T>(lists: ListNode<T>[], l: number, r: number): ListNode<T> {
  if (l >= r) return lists[l]
  const mid = Math.floor((r - l) / 2 + l)
  const l1: ListNode = merge(lists, l, mid)
  const l2: ListNode = merge(lists, mid + 1, r)
  return mergeTwoLists(l1, l2)
}

const mergeTwoLists = function (l1: ListNode, l2: ListNode): ListNode {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next as ListNode, l2)
    return l1
  }
  l2.next = mergeTwoLists(l1, l2.next as ListNode)
  return l2
}

console.log(mergeKLists(lists))
