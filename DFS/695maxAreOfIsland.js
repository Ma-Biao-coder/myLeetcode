var maxAreaOfIsland = function (grid) {
    let m = grid.length, n = grid[0].length
    let max = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // 淹没并更新最大岛屿面积
                max = Math.max(max, dfs(grid, i, j))
            }
        }
    }
    return max
}


// 淹没dfs
const dfs = (grid, i, j) => {
    let m = grid.length, n = grid[0].length
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
        // 注意这里是 return 0 不是return！！！！！
        return 0
    }
    grid[i][j] = 0
    return dfs(grid, i + 1, j)
        + dfs(grid, i - 1, j)
        + dfs(grid, i, j + 1)
        + dfs(grid, i, j - 1) + 1
}