/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let ans = "",
    max = -Infinity;
  let set = new Set(banned);
  let map = new Map();

  paragraph
    .replace(/,|\.|\!|\?|\'|\;|\s/g, " ")
    .split(" ")
    .reduce((res, cur) => {
      let item = cur.trim().toLowerCase();
      if (!item) return res;
      if (!set.has(item)) {
        res.set(item, (res.get(item) || 0) + 1);
        if (res.get(item) > max) {
          max = res.get(item);
          ans = item;
        }
      }

      return res;
    }, map);

  return ans;
};
// @lc code=end
