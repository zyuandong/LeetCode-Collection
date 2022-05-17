/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let dict = new Array(order.length);
  let baseIndex = "a".charCodeAt();

  for (let i = 0; i < dict.length; i++) {
    dict[order.charCodeAt(i) - baseIndex] = i;
  }

  for (let i = 1; i < words.length; i++) {
    let isValid = false;
    for (let j = 0; j < words[i].length && j < words[i - 1].length; j++) {
      let pre = dict[words[i - 1].charCodeAt(j) - baseIndex];
      let cur = dict[words[i].charCodeAt(j) - baseIndex];

      if (pre > cur) {
        return false;
      } else if (pre < cur) {
        isValid = true;
        break;
      }
    }

    if (!isValid) {
      if (words[i].length < words[i - 1].length) return false;
    }
  }

  return true;
};
// @lc code=end
