'use strict'
exports.__esModule = true
var LinkList_1 = require('../LinkList')
// 1 -> 3 -> 2
// 2 -> 3 -> 1
var reversePrint = function(head) {
  // 利用栈 后入先出的特性
  var stack = []
  var tmp = head
  while (tmp != null) {
    stack.push(tmp.val)
    tmp = tmp.next
  }
  var ans = []
  // 依次出栈
  while (stack.length) {
    ans.push(stack.pop())
  }
  return ans
}
var linkList = new LinkList_1.LinkList([1, 3, 2])
console.log(linkList.head)
console.log(reversePrint(linkList.head))
