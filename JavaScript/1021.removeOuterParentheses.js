/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [],
    ans = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === ")") {
      stack.pop();
    }

    if (stack.length) {
      ans += char;
    }

    if (char === "(") {
      stack.push(char);
    }
  }

  return ans;
};
// @lc code=end
