/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  let s1arr = new Array(26).fill(0);
  let s2arr = new Array(26).fill(0);

  const a = "a".charCodeAt(0);
  for (let index = 0; index < s1.length; index++) {
    s1arr[s1[index].charCodeAt(0) - a]++;
  }

  let left = 0,
    right = 0;
  while (right < s2.length) {
    const rightCode = s2[right].charCodeAt(0) - a;
    s2arr[rightCode]++;
    while (s2arr[rightCode] > s1arr[rightCode]) {
      const leftCode = s2[left].charCodeAt(0) - a;
      s2arr[leftCode]--;
      left++;
    }
    if (right - left + 1 == s1.length) {
      return true;
    }
    right++;
  }

  return false;
}
// @lc code=end
