// https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/
// 每日一题
// 时间复杂度 O(nlogn) 空间复杂度 O(n)
function trimMean(arr: number[]): number {
	arr.sort((a, b) => a - b)
	const n = arr.length
	const fivePercent = Math.floor(n * 0.05)
	let sum = 0
	for (let i = fivePercent; i < n - fivePercent; i++) {
		sum += arr[i]
	}
	return sum / Math.floor(n - 2 * fivePercent)
}
