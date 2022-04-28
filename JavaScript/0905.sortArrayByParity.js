/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    if (nums[start] % 2 > 0 && nums[end] % 2 === 0) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
    }

    start = nums[start] % 2 ? start : start + 1;
    end = nums[end] % 2 ? end - 1 : end;
  }

  return nums;
};
// @lc code=end
