/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
	// record the letter and number
	let a = '',
		b = ''
	for (let i = 0; i < s.length; i++) {
		if (s[i] >= 'a') a += s[i]
		else b += s[i]
	}
	let m = a.length,
		n = b.length,
		tot = m + n
	if (Math.abs(m - n) > 1) return ''
	// double pointer
	let ans = ''
	while (ans.length < tot) {
		if (m > n) ans += a[--m]
		else if (m < n) ans += b[--n]
		else {
			if (ans[ans.length - 1] >= 'a') ans += b[--n]
			else ans += a[--m]
		}
	}
	return ans
}
