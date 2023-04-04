/*
 * @lc app=leetcode.cn id=1109 lang=typescript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
function corpFlightBookings(bookings: number[][], n: number): number[] {
    const arr = new Array(n).fill(0);
    for (let i = 0; i < bookings.length; i++) {
        const book = bookings[i];
        for (let j = book[0]; j <= book[1]; j++) {
            arr[j - 1] += book[2];
        }
    }
    return arr;
};
// @lc code=end

