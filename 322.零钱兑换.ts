/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let index = 1; index <= amount; index++) {
        for (let j = 0; j < coins.length; j++) {
            if (index - coins[j] < 0) {
                continue;
            }
            dp[index] = Math.min(dp[index], dp[index - coins[j]] + 1)
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount]
};
// @lc code=end

