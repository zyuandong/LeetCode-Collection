/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const list = ["a", "e", "i", "o", "u"];
  let aStr;

  let ans = sentence
    .split(" ")
    .reduce((res, cur, index) => {
      aStr =
        "ma" +
        Array(index + 1)
          .fill("a")
          .join("");

      if (list.includes(cur.charAt(0).toLowerCase())) {
        cur = cur + aStr;
      } else {
        cur = cur.substring(1) + cur.charAt(0) + aStr;
      }

      res.push(cur);
      return res;
    }, [])
    .join(" ");

  return ans;
};
// @lc code=end
