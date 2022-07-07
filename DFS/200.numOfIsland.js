/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let m = grid.length, n = grid[0].length
    let res = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(grid, i, j)
            }
        }
    }
    return res
};

const dfs = (grid, i, j) => {
    let m = grid.length, n = grid[0].length
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') {
        return
    }
    // 淹掉
    grid[i][j] = '0'
    // 继续淹
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
}