/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let min = 0,
    max = s.length,
    ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      ans.push(min);
      min++;
    } else {
      ans.push(max);
      max--;
    }
  }

  ans.push(min++);

  return ans;
};
// @lc code=end
