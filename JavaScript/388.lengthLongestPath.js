/*
 * @lc app=leetcode.cn id=388 lang=javascript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let ans = 0,
    tabNum = 0,
    pathList = [],
    arr = input.split("\n");

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].split("\t");
    let temp = item.length - 1;
    let path = item[item.length - 1];
    if (temp <= tabNum) {
      pathList.splice(temp, pathList.length, path);
    } else {
      pathList.push(path);
    }

    if (path.includes(".")) {
      ans = Math.max(ans, pathList.join("/").length);
    }

    tabNum = temp;
  }

  return ans;
};
// @lc code=end
