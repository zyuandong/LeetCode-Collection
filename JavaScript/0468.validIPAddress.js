/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  let list = queryIP.split(".");
  if (list.length === 4) {
    for (let i = 0; i < list.length; i++) {
      const item = parseInt(list[i]);

      if (item >= 0 && item <= 255) {
        if (`${item}` !== list[i]) return "Neither";
      } else {
        return "Neither";
      }
    }

    return "IPv4";
  }

  list = queryIP.split(":");
  if (list.length === 8) {
    for (let i = 0; i < list.length; i++) {
      const item = parseInt(list[i], 16);

      if (list[i].length <= 4) {
        if (item === 0) continue;
        if (item.toString(16).toLowerCase() !== list[i].replace(/0*/, "").toLowerCase()) {
          return "Neither";
        }
      } else {
        return "Neither";
      }
    }

    return "IPv6";
  }

  return "Neither";
};
// @lc code=end
