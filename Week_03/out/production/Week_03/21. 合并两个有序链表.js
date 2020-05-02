"use strict";
exports.__esModule = true;
var LinkList_1 = require("../LinkList");
var mergeTwoLists = function (l1, l2) {
    var dummyHead = new LinkList_1["default"](-1);
    var prev = dummyHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        }
        else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 == null ? l2 : l1;
    return dummyHead.next;
};
var linkList1 = new LinkList_1["default"](1);
linkList1.next = new LinkList_1["default"](4);
linkList1.next.next = new LinkList_1["default"](5);
var linkList2 = new LinkList_1["default"](1);
linkList2.next = new LinkList_1["default"](3);
linkList2.next.next = new LinkList_1["default"](4);
console.log(mergeTwoLists(linkList1, linkList2));
