/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let stack = [root],
    value = root.val;
  while (stack.length > 0) {
    if (stack[0].val !== value) return false;
    if (stack[0].left) stack.push(stack[0].left);
    if (stack[0].right) stack.push(stack[0].right);
    stack.shift();
  }
  return true;
};
// @lc code=end
