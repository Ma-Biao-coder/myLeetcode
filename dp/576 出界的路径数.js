// 超时算法
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */

 // 把一个问题化简成n个小问题
 var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let K = 1000_000_007
    return helper(m, n, maxMove, startRow, startColumn)
};

// dfs m, n 棋盘大小
// N 步数 x y 当前坐标
// 这里从边界外用N步走到x, y 相当于用N - 1 步走到 x,y周围的四个格子
const helper = (m, n, N, x, y) => {
    if(x < 0 || y < 0 || x >= m || y >= n){
        return 1
    }
    if(N === 0) return 0
    let res = 0
    res += helper(m, n, N - 1, x - 1, y)
    res += helper(m, n, N - 1, x + 1, y)
    res += helper(m, n, N - 1, x, y + 1)
    res += helper(m, n, N - 1, x, y - 1)
    return res
}