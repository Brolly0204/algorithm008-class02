var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
var linkList1 = new ListNode(1);
linkList1.next = new ListNode(4);
linkList1.next.next = new ListNode(5);
var linkList2 = new ListNode(1);
linkList2.next = new ListNode(3);
linkList2.next.next = new ListNode(4);
var linkList3 = new ListNode(2);
linkList3.next = new ListNode(6);
var lists = [linkList1, linkList2, linkList3];
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
var mergeKLists = function (lists) {
    if (lists == null || lists.length === 0)
        return null;
    return merge(lists, 0, lists.length - 1);
};
var merge = function (lists, l, r) {
    if (l === r)
        return lists[l];
    var mid = (r - l) / 2 + l;
    var l1 = merge(lists, l, mid);
    var l2 = merge(lists, mid + 1, r);
    return mergeTwoLists(l1, l2);
};
var mergeTwoLists = function (l1, l2) {
    if (l1 == null)
        return l2;
    if (l2 == null)
        return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
};
console.log(mergeKLists(lists));
