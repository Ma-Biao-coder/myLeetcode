var robot = function (command, obstacles, x, y) {
	const coordination = new Array(2).fill(0)
	let commands = command.repeat(1000)
	for (let i = 0; i < commands.length; i++) {
		if (commands[i] === 'U') {
			coordination[1] += 1
			if (obstacles.includes(coordination)) return false
			if (coordination[0] > x || coordination[1] > y) return false
			if (coordination[0] === x && coordination[1] === y) return true
		}
		if (commands[i] === 'R') {
			coordination[0] += 1
			if (obstacles.includes(coordination)) return false
			if (coordination[0] > x || coordination[1] > y) return false
			if (coordination[0] === x && coordination[1] === y) return true
		}
	}
}

robot("URR",[[2,2]],3,2)