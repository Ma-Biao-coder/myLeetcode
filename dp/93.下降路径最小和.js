/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let n = matrix.length
    // 状态容器
    const dp = Array(n).fill().map(item => Array(n).fill(0))
    // 初始化
    for (let j = 0; j < n; j++) {
        dp[0][j] = matrix[0][j]
    }

    /**
        要从到达某一点 然后回头看，而不是用贪心
     */
    // 状态转移方程
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 要处理边界条件
            if (j === 0) {
                dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1])
                continue
            }
            if (j === n - 1) {
                dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1])
                continue
            }
            dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1])
        }
    }
    // 返回结果
    let ans = Number.MAX_VALUE
    for (let j = 0; j < n; j++) {
        ans = Math.min(ans, dp[n - 1][j])
    }
    return ans
};