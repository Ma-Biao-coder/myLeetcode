/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 */
/**
 * 环形数组，分两种情况，一种是顺时针，一种是逆时针
 * 同时要考虑起始站的顺序在终止站前还是在后
 * */
var distanceBetweenBusStation = function (distance, start, destination) {
	let sum = 0
	const n = distance.length
	for (let i = 0; i < n; i++) {
		sum += distance[i]
	}
	let sum1 = 0
	if (start < destination) {
		for (let i = start; i < destination; i++) {
			sum1 += distance[i]
		}
	} else {
		for (let i = destination; i < start; i++) {
			sum1 += distance[i]
		}
	}
	return sum - sum1 > sum1 ? sum1 : sum - sum1
}
