/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let x,
    ans = [];

  for (let i = 0; i < nums.length; i++) {
    x = Math.abs(nums[i]);
    if (nums[x - 1] < 0) {
      ans.push(x);
    } else {
      nums[x - 1] = 0 - nums[x - 1];
    }
  }

  return ans;
};
// @lc code=end
