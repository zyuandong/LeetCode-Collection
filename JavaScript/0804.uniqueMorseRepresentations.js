/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */

var uniqueMorseRepresentations = function (words) {
  let map = arrToMap();
  let set = new Set();
  for (let i = 0; i < words.length; i++) {
    let item = words[i];
    let code = "";
    [...item].forEach((char) => (code += map[char]));
    set.add(code);
  }

  return set.size;
};

const arrToMap = () => {
  return [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ].reduce((res, cur, index) => {
    res[String.fromCharCode(97 + index)] = cur;
    return res;
  }, {});
};

// @lc code=end
