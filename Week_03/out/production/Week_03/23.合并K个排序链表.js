'use strict'
exports.__esModule = true
var LinkList_1 = require('../LinkList')
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
var linkList1 = new LinkList_1['default'](1)
linkList1.next = new LinkList_1['default'](4)
linkList1.next.next = new LinkList_1['default'](5)
var linkList2 = new LinkList_1['default'](1)
linkList2.next = new LinkList_1['default'](3)
linkList2.next.next = new LinkList_1['default'](4)
var linkList3 = new LinkList_1['default'](2)
linkList3.next = new LinkList_1['default'](6)
var lists = [linkList1, linkList2, linkList3]
var mergeKLists = function(lists) {
  if (lists == null || lists.length === 0) return null
  return sort(lists, 0, lists.length - 1)
}
var sort = function(lists, lo, hi) {
  if (lo >= hi) return lists[lo]
  var mid = Math.floor((hi - lo) / 2 + lo)
  var l1 = sort(lists, lo, mid)
  var l2 = sort(lists, mid + 1, hi)
  return merge(l1, l2)
}
var merge = function(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2)
    return l1
  }
  l2.next = merge(l1, l2.next)
  return l2
}
console.log(mergeKLists(lists))
