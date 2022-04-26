/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let ans = 0,
    xMax = 0,
    yMax = Array(grid.length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    xMax = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > xMax) {
        ans -= xMax;
        ans += grid[i][j];
        xMax = grid[i][j];
      }

      if (grid[i][j] > yMax[j]) {
        ans -= yMax[j];
        ans += grid[i][j];
        yMax[j] = grid[i][j];
      }

      ans += grid[i][j] > 0 ? 1 : 0;
    }
  }

  return ans;
};
// @lc code=end
