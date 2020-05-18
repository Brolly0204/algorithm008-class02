"use strict";
exports.__esModule = true;
var ListNode_1 = require("../../ListNode");
var detectCycle = function (head) {
    var node = head;
    while (node && node.next) {
        if (node.flag) {
            return node;
        }
        node.flag = 1;
        node = node.next;
    }
    return null;
};
var root = new ListNode_1.ListNode(3);
root.next = new ListNode_1.ListNode(2);
root.next.next = new ListNode_1.ListNode(0);
root.next.next.next = new ListNode_1.ListNode(-4);
root.next.next.next.next = root.next;
console.log(detectCycle(root));
