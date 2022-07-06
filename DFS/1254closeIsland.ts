function closedIsland(grid: number[][]): number {
    let m: number = grid.length, n: number = grid[0].length

    // 消灭边边上的土地，让他们都被淹掉  然后就变成200题
    for (let j: number = 0; j < n; j++) {
        // 第一行
        dfs(grid, 0, j)
        // 最后一行
        dfs(grid, m - 1, j)
    }
    for (let i: number = 0; i < m; i++) {
        // 第一列
        dfs(grid, i, 0)
        // 最后一列
        dfs(grid, i, n - 1)
    }
    let res: number = 0
    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                // 如果是土地 就 + 1 然后就地淹掉
                res++
                dfs(grid, i, j)
            }
        }
    }
    return res
};

const dfs = (grid: number[][], i: number, j: number): void => {
    let m: number = grid.length, n = grid[0].length
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 1) {
        return
    }
    if (grid[i][j] === 1) return
    grid[i][j] = 1
    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i - 1, j)
    dfs(grid, i, j - 1)
}