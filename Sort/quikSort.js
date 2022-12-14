// https://leetcode.cn/problems/sort-an-array/submissions/
var sortArray = function (nums) {
	const quickSort = (nums, start, end) => {
		if (start >= end) return
		let left = start,
			right = end
		let pivot = nums[Math.floor((left + right) / 2)]
		// partiotion
		while (left <= right) {
			while (nums[left] < pivot) {
				left++
			}
			while (nums[right] > pivot) {
				right--
			}
			if (left <= right) {
				let temp = nums[left]
				nums[left] = nums[right]
				nums[right] = temp
				left++
				right--
			}
		}
		quickSort(nums, left, end)
		quickSort(nums, start, right)
	}
	quickSort(nums, 0, nums.length - 1)
	return nums
}
