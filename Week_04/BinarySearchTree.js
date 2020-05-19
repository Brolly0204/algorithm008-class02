"use strict";
exports.__esModule = true;
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (val) {
        if (this.root == null) {
            this.root = new TreeNode(val);
        }
        else {
            this.insertNode(this.root, val);
        }
    };
    BinarySearchTree.prototype.insertNode = function (node, val) {
        if (val < node.val) {
            if (node.left) {
                this.insertNode(node.left, val);
            }
            else {
                node.left = new TreeNode(val);
            }
        }
        else {
            if (node.right) {
                this.insertNode(node.right, val);
            }
            else {
                node.right = new TreeNode(val);
            }
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
