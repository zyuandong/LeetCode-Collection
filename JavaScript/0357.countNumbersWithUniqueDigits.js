/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 计算各个位数不同的数字个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  // 遍历方法：
  // 针对测试用例 8 超时
  // const end = 10 ** n;
  // let ans = 0;
  // for (let i = 0; i < end; i++) {
  //   let set = new Set([...i.toString()]);
  //   if (i.toString().length === set.size) ans++;
  //   set.clear();
  // }
  // return ans;

  // 规律 + 排列
  let ans = 0;
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    ans += temp * (i - 1);
    temp *= 9 - i + 1;
    ans += temp;
  }

  return ans + 1;
};
// @lc code=end
