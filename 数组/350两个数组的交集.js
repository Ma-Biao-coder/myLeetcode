// https://leetcode.cn/problems/intersection-of-two-arrays-ii/
// 用数组当哈希表来存储信息
var intersect = function (nums1, nums2) {
	const hash = new Array(1001).fill(0)
	const ans = []
	for (let num of nums1) {
		hash[num]++
	}
	for (let num of nums2) {
		if (hash[num] > 0) {
			ans.push(num)
			hash[num]--
		}
	}
	return ans
}
