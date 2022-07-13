/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // 首先找到状态容器
    // 这个 相当于java int[][] dp = new int[m][n]
    const dp = Array(m).fill(Array(n))
    // 容器初始化
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    // 状态转移方程  到达每一个位置的方式由到达上面的位置和到达左边的位置的达到方法数决定
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};