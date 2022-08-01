var MyQueue = function () {
	this.stack1 = []
	this.stack2 = []
}
/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stack1.push(x)
}
/**
 * @param {void}
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	if (this.stack2.length !== 0) {
		return this.stack2.pop()
	}
	while (this.stack1.length !== 0) {
		this.stack2.push(this.stack1.pop())
	}
	return this.stack2.pop()
}
/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	let temp = this.pop()
	this.stack2.push(temp)
	return temp
}
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.stack1.length === 0 && this.stack2.length === 0
}
