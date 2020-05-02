"use strict";
exports.__esModule = true;
var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkList = /** @class */ (function () {
    function LinkList(list) {
        var _this = this;
        this.head = null;
        if (Array.isArray(list)) {
            list.forEach(function (item) { return _this.insert(item); });
        }
    }
    LinkList.prototype.insert = function (val) {
        var newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            this.insertNode(this.head, newNode);
        }
    };
    LinkList.prototype.insertNode = function (node, newNode) {
        var cur = node;
        while (cur.next != null) {
            cur = cur.next;
        }
        cur.next = newNode;
    };
    return LinkList;
}());
exports.LinkList = LinkList;
