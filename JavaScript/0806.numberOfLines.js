/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let len = 0;
  return [...s].reduce(
    (res, cur) => {
      let width = widths[cur.charCodeAt() - 97];
      if (len + width > 100) {
        res[0] += 1;
        len = width;
      } else {
        len += width;
      }
      res[1] = len;
      return res;
    },
    [1, 0]
  );
};
// @lc code=end
