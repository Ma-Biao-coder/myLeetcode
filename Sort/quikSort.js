// https://leetcode.cn/problems/sort-an-array/submissions/
/**
 * 快排先整体有序，再局部有序
 * 先在中间随便切一刀，然后把比这个数大的放右边，比这个小的放左边‘
 * 然后在对左边的做这个操作
 * 在对右边的做这个操作
 * 平均时间复杂度O(nlogn)，在最坏的情况下会退化到O(n2)
 * 假设输入数据本来就有序，且在选择pivot时每次都选第一个，就只用O(n)的时间把数组划分为1和n-1个数
 * 空间复杂度O(1) 原地排序
 * quick sort 是不稳定排序
 */
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

/**
 * 归并排序先局部有序再整体有序
 * 归并排序会多花一个O(n)额外空间，有稳定性
 * mergesort不选pivot，先左右两边排序，然后进行归并
 * 时间复杂度O(nlogn)  空间复杂度O(n)
 * merge sort 稳定排序
 * (先局部有序，再整体有序)先劈一刀，左边排序，右边排序，得到两个排序好的数组，然后再用额外空间装起来
 */

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
