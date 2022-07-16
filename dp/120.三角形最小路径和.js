/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 贪心 看不到全局最优解
// 找状态转移方程要反推过去
var minimumTotal = function (triangle) {
    let n = triangle.length
    if (n === 1) return triangle[0][0]
    // 初始化状态容器要这样写 但是不知道为啥
    const dp = Array(n).fill().map(item => Array(n).fill(0))
    // const dp = Array(n).fill(Array(n))
    dp[0][0] = triangle[0][0]
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            let cur = triangle[i][j]
            if (j === 0) {
                dp[i][j] = cur + dp[i - 1][j]
                continue
            }
            if (j === i) {
                dp[i][j] = cur + dp[i - 1][j - 1]
                continue
            }
            dp[i][j] = cur + Math.min(dp[i - 1][j], dp[i - 1][j - 1])
        }
    }

    let ans = Number.MAX_VALUE
    for (let i = 0; i < n; i++) {
        ans = Math.min(ans, dp[n - 1][i])
    }
    return ans
};