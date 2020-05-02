import { LinkList, ListNode } from '../LinkList'

// 1 -> 3 -> 2
// 2 -> 3 -> 1
const reversePrint = function (head: ListNode | null) {
  // 利用栈 后入先出的特性
  const stack: number[] = []
  let tmp = head
  while (tmp != null) {
    stack.push(tmp.val)
    tmp = tmp.next
  }

  const ans: number[] = []
  // 依次出栈
  while (stack.length) {
    ans.push(stack.pop() as number)
  }
  return ans
}
const linkList = new LinkList([1, 3, 2])
console.log(linkList.head)
console.log(reversePrint(linkList.head))
