/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    arr = [i];
    for (let j = nums.length - 1; j > i; j--) {
      if (target - nums[i] === nums[j]) {
        arr.push(j);
        break;
      }
    }
    if (arr.length === 2) break;
  }
  return arr;
};
// @lc code=end
