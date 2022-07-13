/**
 * 这道题的难点在于状态的初始化，从而将这道题转化为62题
 */

var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length
    // 状态点的初始化，像62一样 第一行和第一列是状态点的基础
    // grid[0][0]状态点不会变化，所以从1开始
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1]
    }
    /**
     * 初始化完成后就是状态转移方程
     */
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    return grid[m - 1][n - 1]
}