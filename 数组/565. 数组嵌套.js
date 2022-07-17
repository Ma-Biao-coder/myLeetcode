/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums){
    let n = nums.length
    let ans = 0
    /**
     * 标记访问
     */
    const has = Array(n).fill().map(item => Boolean())
    // 对每一个数都做一个遍历  看看嵌套的长度
    for(let i = 0; i < n; i++){
        if(!has[i]){
            let count = 0
            while(!has[i]){
                // 从一个数到下一个数 下一个数所能产生的 嵌套一定少于这一次数产生的
                has[i] = true
                count ++
                i = nums[i]
            }
            // 更新ans  注意更新的位置
            ans = Math.max(ans, count)
        }
    }
    return ans
}

