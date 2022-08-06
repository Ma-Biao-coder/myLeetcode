/**
 * 和两数相加那道题一样
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var stringSum = function (num1, num2) {
	const arr1 = num1.split('')
	const arr2 = num2.split('')
	let i = arr1.length - 1,
		j = arr2.length - 1,
		t = 0
	let s = ''
	while (i >= 0 || j >= 0 || t > 0) {
		if (i >= 0) {
			t += arr[i] * 1
		}
		if (j >= 0) {
			t += arr2[j] * 1
		}
		s += t % 10
		t = Math.floor(t / 10)
		i--
		j--
	}
	return s.split('').reverse().join('')
}
