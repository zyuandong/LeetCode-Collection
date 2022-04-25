/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!this.map.get(nums[i])) {
      this.map.set(nums[i], [i]);
    } else {
      this.map.get(nums[i]).push(i);
    }
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let arr = this.map.get(target);
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end
