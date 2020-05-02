import ListNode from '../LinkList'

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
const mergeKLists = function (lists: ListNode<number>[]): ListNode<number> | null {
  if (lists == null || lists.length === 0) return null
  return sort(lists, 0, lists.length - 1)
}

const sort = function (lists: ListNode<number>[], lo: number, hi: number): ListNode<number> {
  if (lo >= hi) return lists[lo]
  const mid = Math.floor((hi - lo) / 2 + lo)
  const l1 = sort(lists, lo, mid)
  const l2 = sort(lists, mid + 1, hi)
  return merge(l1, l2)
}

type MergeFn = (l1: ListNode<number>, l2: ListNode<number>) => ListNode<number>
const merge: MergeFn = function (l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = merge(l1.next as ListNode<number>, l2)
    return l1
  }
  l2.next = merge(l1, l2.next as ListNode<number>)
  return l2
}
console.log(mergeKLists(lists))