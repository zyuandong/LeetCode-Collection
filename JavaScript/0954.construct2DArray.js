/*
 * @lc app=leetcode.cn id=954 lang=javascript
 *
 * [954] 二倍数对数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  let map = new Map();
  for (let k of arr) {
    map.set(k, (map.get(k) || 0) + 1);
  }

  if ((map.get(0) || 0) % 2 != 0) return false;

  let keys = Array.from(new Set(arr));
  keys.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (let x of keys) {
    if (map.get(x) > (map.get(x * 2) || 0)) return false;
    map.set(x * 2, (map.get(x * 2) || 0) - map.get(x));
  }

  return true;
};

// @lc code=end
