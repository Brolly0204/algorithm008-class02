"use strict";
exports.__esModule = true;
var board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
var isValidSudoku = function (board) {
    for (var i = 0, len = board.length; i < len; i++) {
        var row = new Set();
        var col = new Set();
        for (var j = 0; j < board.length; j++) {
            // 每一列
            if (board[j][i] !== '.') {
                if (col.has(board[j][i]))
                    return false;
                col.add(board[j][i]);
            }
            // console.log(board[j][i])
            if (board[i][j] !== '.') {
                if (row.has(board[i][j]))
                    return false;
                row.add(board[i][j]);
            }
        }
        // 9宫格
        var block = new Set();
        var x = (i / 3 >> 0) * 3;
        var y = i % 3 * 3;
        for (var j = 0; j < 9; j++) {
            if (board[x][y] !== '.') {
                if (block.has(board[x][y]))
                    return false;
                block.add(board[x][y]);
            }
            y++;
            if ((j + 1) % 3 === 0) {
                x += 1;
                y -= 3;
            }
        }
    }
    return true;
};
console.log(isValidSudoku(board));
