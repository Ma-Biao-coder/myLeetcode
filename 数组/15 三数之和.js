/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	const res = []
	const n = nums.length
	if (!nums || n < 3) return res
	// 双指针，要排序
	nums.sort((a, b) => a - b)
	for (let i = 0; i < n; i++) {
		if (nums[i] > 0) break
		// 去重1
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let l = i + 1,
			r = n - 1
		while (l < r) {
			const sum = nums[i] + nums[l] + nums[r]
			if (sum === 0) {
				res.push(Array(nums[i], nums[r], nums[l]))
				// -3 -2 -1 -1 -1 0 1 2 2 3 3 5
				// 直到走到不相同的数，再进行
				while (l < r && nums[l] === nums[l + 1]) l++
				while (l < r && nums[r] === nums[r - 1]) r--
				r--
				l++
			} else if (sum > 0) {
				r--
			} else {
				l++
			}
		}
	}
	return res
}
