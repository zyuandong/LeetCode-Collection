/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root],
    len = 1,
    ans = [];

  while (queue.length > 0) {
    let childrenLen = 0;
    let arr = [];
    let i = 0;
    for (i = 0; i < len; i++) {
      childrenLen += queue[i].children.length;
      arr.push(queue[i].val);
      for (let j = 0; j < queue[i].children.length; j++) {
        queue.push(queue[i].children[j]);
      }
    }

    queue.splice(0, i);
    len = childrenLen;
    ans.push(arr);
  }

  return ans;
};
// @lc code=end
