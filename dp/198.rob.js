/**
 * @param {number[]} nums
 * @return {number} 
 */
var rob = function (nums) {
    if (!nums.length) return 0
    if (nums.length === 1) return nums[0]
    // memo 用于记录到每一个房间时可以偷到的最多的钱
    const memo = []
    memo[0] = nums[0]
    memo[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i <= nums.length; i++) {
        // memo[i - 2] + nums[i] 表示决定偷第i家， memo[i - 1] 表示不偷第i家
        memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1])
    }
    return memo[nums.length - 1]
}