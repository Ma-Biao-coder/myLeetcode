// 11 septembre 2022
// https://leetcode.cn/problems/minimum-cost-to-hire-k-workers/
// 三叶
function mincostToHireWorkers(qs: number[], ws: number[], k: number): number {
	const n = qs.length
	const ds: number[][] = new Array<Array<number>>()
	for (let i = 0; i < n; i++) ds.push([ws[i] / qs[i], i])
	ds.sort((a, b) => a[0] - b[0])
	const q = new MaxPriorityQueue()
	let ans = 1e18
	for (let i = 0, tot = 0; i < n; i++) {
		const cur = qs[ds[i][1]]
		tot += cur
		q.enqueue(cur)
		if (q.size() > k) tot -= q.dequeue().element
		if (q.size() == k) ans = Math.min(ans, tot * ds[i][0])
	}
	return ans
}
