/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let ans = 0,
    col = strs[0].length;
  for (let i = 0; i < col; i++) {
    let char = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      let item = strs[j].charAt(i);
      if (item < char) {
        ans += 1;
        break;
      }
      char = item;
    }
  }

  return ans;
};
// @lc code=end
