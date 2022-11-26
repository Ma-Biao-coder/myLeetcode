/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
	let count = 0
	words.forEach((word) => {
		if (allowed.includes(countChar(word))) {
			count++
		}
	})
	return count
}

const countChar = (word) => {
	let s = ''
	for (let i = 0; i < word.length; i++) {
		if (!s.includes(word[i])) {
			s += word[i]
		}
	}
	return s
}

countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])
