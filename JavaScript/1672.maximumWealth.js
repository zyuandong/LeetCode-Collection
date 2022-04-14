/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let ans = -Infinity;
  for (let i = 0; i < accounts.length; i++) {
    const item = accounts[i];
    let total = 0;
    for (let j = 0; j < item.length; j++) {
      total += item[j];
    }
    ans = Math.max(ans, total);
  }

  return ans;
};
// @lc code=end
