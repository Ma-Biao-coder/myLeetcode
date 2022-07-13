/**
 * @param {number[]} obstacleGrid 
 * @returns {number}
 */
var uniquePathWithObstacles = function (obstacleGrid) {
    // 有障碍物但是不影响状态转移方程
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    // 状态容器
    // const dp = Array(m).fill(Array(n).fill(0))  // 不知道为啥 这样定义不行
    const dp = Array(m).fill().map(item => Array(n).fill(0))
    // 状态初始化
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) break
        dp[i][0] = 1
    }
    for (let j = 0; i < n; j++) {
        if (obstacleGrid[0][j] === 1) break
        dp[0][j] = 1
    }
    // 状态转移
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) continue
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}