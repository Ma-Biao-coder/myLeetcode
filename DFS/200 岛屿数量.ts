function numOfIsland(grid: string[][]): number {
    let res: number = 0
    let m: number = grid.length, n: number = grid[0].length
    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                // 发现岛屿 岛屿 + 1
                res++
                dfs(grid, i, j)
            }
        }
    }
    return res
}
/** 
 * dfs的作用是遍历，所以return void
 */
const dfs = (grid: string[][], i: number, j: number): void => {
    let m: number = grid.length, n: number = grid[0].length
    // 越界
    if (i < 0 || j < 0 || i >= m || j >= n) {
        return
    }
    // 已经是海
    if (grid[i][j] === '0') {
        return
    }
    grid[i][j] = '0'
    /**
     * 淹没上下左右的土地  其实就是用递归将上下左右的都标记为visited 直到碰到边界条件
     */
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
}