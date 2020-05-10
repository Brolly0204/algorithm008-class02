import { ListNode } from '../LinkList'

const linkList1 = new ListNode(1)
linkList1.next = new ListNode(4)
linkList1.next.next = new ListNode(5)
const linkList2 = new ListNode(1)
linkList2.next = new ListNode(3)
linkList2.next.next = new ListNode(4)
const linkList3 = new ListNode(2)
linkList3.next = new ListNode(6)
const lists = [linkList1, linkList2, linkList3]

type ListNodeOrNull = ListNode | null
// const mergeKLists = function (lists: ListNode[]): ListNodeOrNull {
//   if (lists == null || lists.length === 0) return null
//   const mergeTowLists = (l1: ListNodeOrNull, l2: ListNodeOrNull): ListNodeOrNull => {
//     if (l1 == null) return l2
//     if (l2 == null) return l1
//     if (l1.val < l2.val) {
//       l1.next = merge(l1.next, l2)
//       return l1
//     }
//     l2.next = merge(l1, l2.next)
//     return l2
//   }

//   let list: ListNodeOrNull = lists[0]
//   for (let i = 1, len = lists.length; i < len; i++) {
//     list = mergeTowLists(list, lists[i])
//   }
//   return list
// };

const mergeTowLists = (l1: ListNodeOrNull, l2: ListNodeOrNull): ListNodeOrNull => {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTowLists(l1.next, l2)
    return l1
  }
  l2.next = mergeTowLists(l1, l2.next)
  return l2
}

const merge = (lists: ListNode[], l: number, r: number): ListNodeOrNull => {
  if (l === r) return lists[l]
  if (l > r) return null
  const mid = ~~((l + r) / 2)
  return mergeTowLists(merge(lists, l, mid), merge(lists, mid + 1, r))
}

const mergeKLists = function (lists: ListNode[]): ListNodeOrNull {
  return merge(lists, 0, lists.length - 1)
}
console.log(JSON.stringify(mergeKLists(lists)))