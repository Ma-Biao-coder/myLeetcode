// https://leetcode.cn/problems/number-of-arithmetic-triplets/
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

// copilot‘s refactoring
var arithmeticTriplets = function (nums, diff) {
    function hasNextNumber(num, diff) {
        return nums.includes(num + diff)
    }
    let res = 0
    nums.forEach((num) => {
        if (hasNextNumber(num, diff) && hasNextNumber(num, 2 * diff)) {
            res++
        }
    })
    return res
}
