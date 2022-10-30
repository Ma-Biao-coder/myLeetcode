var totalFruit = function (fruits) {
	const set = new Set()
	let ans = 0,
		n = fruits.length
	for (let i = 0; i < n; i++) {
		let res = 0
		set.add(fruits[i])
		res++
		for (let j = i + 1; j < n; j++) {
			set.add(fruits[j])
			if (set.size < 3) {
				res++
				ans = ans > res ? ans : res
			} else {
				set.clear()
				break
			}
		}
	}
	return ans
}

totalFruit([1, 2, 1])
