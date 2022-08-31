var validataStackOrder = function (pushed, popped) {
	const stack = []
	// j is the pointer of popped
	let j = 0
	for (let i = 0; i < pushed.length; i++) {
		stack.push(pushed[i])
		while (stack.length && stack[stack.length - 1] === popped[j]) {
			j++
			stack.pop()
		}
	}
	return stack.length === 0
}
