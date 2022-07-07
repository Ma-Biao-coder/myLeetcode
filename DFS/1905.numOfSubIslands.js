/**
 * 思路： 先处理掉不是子岛屿的岛屿，然后再遍历统计一下岛屿数量
 *      当岛屿b中所有的土地在岛屿a中均为土地时，岛屿b就是岛屿a的子岛屿
 *      因此 如果岛屿b中有一个土地 在岛屿a中是水，那么岛屿b就不是岛屿a的子岛屿
 *      那么，我们只要遍历 grid2 中的所有岛屿，把那些不可能是子岛的岛屿排除掉，剩下的就是子岛。
 */
/**
 * @param {number[][]} grid1 
 * @param {number[][]} grid2
 * @return {number} 
 */
var numOfSubislands = function (grid1, grid2) {
    let m = grid2.length, n = grid2[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1 && grid1[i][j] === 0) {
                // 淹掉不是子岛屿的岛屿
                dfs(grid2, i, j)
            }
        }
    }
    let res = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                res++
                dfs(grid2, i, j)
            }
        }
    }
    return res
}

// 用于淹没的dfs
const dfs = (grid, i, j) => {
    let m = grid.length, n = grid[0].length
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
        return
    }
    // 淹掉  grid[i][j]
    grid[i][j] = 0
    // 继续淹掉
    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
}