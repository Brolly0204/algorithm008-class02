'use strict'
exports.__esModule = true
var LinkList_1 = require('../../Week_02/Day5/LinkList')
var hasCycle = function(head) {
  if (head == null || head.next == null) {
    return false
  }
  var slow = head
  var fast = head.next
  while (slow !== fast) {
    if (fast == null || fast.next == null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
var root = new LinkList_1['default'](3)
root.next = new LinkList_1['default'](2)
root.next.next = new LinkList_1['default'](0)
root.next.next.next = new LinkList_1['default'](-4)
root.next.next.next.next = root.next
console.log(hasCycle(root))
