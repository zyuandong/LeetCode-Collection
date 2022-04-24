/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let ans = 0,
    start = 0,
    str = n.toString(2);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      ans = Math.max(ans, i - start);
      start = i;
    }
  }

  return ans;
};
// @lc code=end
