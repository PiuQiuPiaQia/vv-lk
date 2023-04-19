/*
 * @lc app=leetcode.cn id=187 lang=typescript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
function findRepeatedDnaSequences(s: string): string[] {
  let obj = {};
  for (let index = 0; index < s.length - 9; index++) {
    let str = s.slice(index, index + 10);
    if (obj.hasOwnProperty(str)) {
      obj[str]++;
    } else {
      obj[str] = 1;
    }
  }
  let arr = [];
  for (const key in obj) {
    if (obj[key] > 1) {
      arr.push(key);
    }
  }
  return arr;
}
// @lc code=end
