/*
 * @lc app=leetcode.cn id=1094 lang=typescript
 *
 * [1094] 拼车
 */

// @lc code=start
function carPooling(trips: number[][], capacity: number): boolean {
	const arr = new Array(1000).fill(0);
	for (let i = 0; i < trips.length; i++) {
		const trip = trips[i];
		for (let j = trip[1]; j < trip[2]; j++) {
            if (trip[0] > capacity) {
                return false;
            }
			arr[j] += trip[0];
		}
	}    
    for (let index = 1; index < arr.length + 1; index++) {
        if (arr[index] > capacity) {
            return false;
        }
    }
    return true;
}
// @lc code=end
