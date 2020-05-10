'use strict'
exports.__esModule = true
var LinkList_1 = require('../LinkList')
var linkList1 = new LinkList_1.ListNode(1)
linkList1.next = new LinkList_1.ListNode(4)
linkList1.next.next = new LinkList_1.ListNode(5)
var linkList2 = new LinkList_1.ListNode(1)
linkList2.next = new LinkList_1.ListNode(3)
linkList2.next.next = new LinkList_1.ListNode(4)
var linkList3 = new LinkList_1.ListNode(2)
linkList3.next = new LinkList_1.ListNode(6)
var lists = [linkList1, linkList2, linkList3]
var mergeKLists = function(lists) {
  if (lists == null || lists.length === 0) return null
  var mergeTowLists = function(l1, l2) {
    if (l1 == null) return l2
    if (l2 == null) return l1
    if (l1.val < l2.val) {
      l1.next = merge(l1.next, l2)
      return l1
    }
    l2.next = merge(l1, l2.next)
    return l2
  }
  var list = lists[0]
  for (var i = 1, len = lists.length; i < len; i++) {
    list = merge(list, lists[i])
  }
  return list
}
console.log(JSON.stringify(mergeKLists(lists)))
