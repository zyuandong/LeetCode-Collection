/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let temp = "",
    len = s.length,
    i = 0;
  while (i < len) {
    temp = `${s.substring(i)}${s.substring(0, i)}`;
    if (temp === goal) return true;
    i++;
  }
  return false;
};
// @lc code=end
