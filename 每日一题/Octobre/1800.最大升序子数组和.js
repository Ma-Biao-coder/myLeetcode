// https://leetcode.cn/problems/maximum-ascending-subarray-sum/
// Octobre 7 2022
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
	// if(nums.length === 1) return nums[0]
	let max = (ans = nums[0])
	for (let i = 1; i < nums.length; i++) {
		while (nums[i] > nums[i - 1]) {
			max += nums[i]
			i++
		}
		ans = ans > max ? ans : max
		max = nums[i]
	}
	return ans
}
