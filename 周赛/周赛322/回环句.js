var isCircleSentence = function (sentence) {
	const words = sentence.split(' ')
	const n = words.length
	for (let i = 0; i < n; i++) {
		let m = words[i].length
		// 这个取余很好
		if (words[i][m - 1] !== words[(i + 1) % n][0]) {
			return false
		}
	}
	return true
}
