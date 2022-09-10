// septembre 9 2022
// https://leetcode.cn/problems/crawler-log-folder/
function minOperations(logs: string[]): number {
	const n = logs.length
	let cnt = 0
	for (let i = 0; i < n; i++) {
		if (logs[i] == './') continue
		else if (logs[i] == '../') {
			if (cnt > 0) {
				cnt--
			} else {
				cnt = 0
			}
		} else cnt++
	}
	return cnt
}
