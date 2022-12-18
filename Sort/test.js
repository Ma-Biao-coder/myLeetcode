var sortArray = function (nums) {
	const mergeSort = (nums, start, end) => {
		if (start >= end) return
		// 处理左半边
		mergeSort(nums, start, Math.floor((start + end) / 2))
		//处理右半边
		mergeSort(nums, Math.floor((start + end) / 2) + 1, end)
		merge(nums, start, end)
	}
	const merge = (nums, start, end) => {
		let mid = Math.floor((start + end) / 2)
		let leftIndex = start,
			rightIndex = mid + 1
		let index = start
		while (leftIndex <= mid && rightIndex <= end) {
			if (nums[leftIndex] < nums[rightIndex]) {
				temp[index++] = nums[leftIndex++]
			} else {
				temp[index++] = nums[rightIndex++]
			}
		}
		while (leftIndex <= mid) {
			temp[index++] = nums[leftIndex++]
		}
		while (rightIndex <= end) {
			temp[index++] = nums[rightIndex++]
		}
		// <= start end
		for (let i = start; i <= end; i++) {
			nums[i] = temp[i]
		}
	}
	const temp = new Array(nums.length).fill(0)
	mergeSort(nums, 0, nums.length - 1)
	return nums
}
sortArray([1, 0, 2])
