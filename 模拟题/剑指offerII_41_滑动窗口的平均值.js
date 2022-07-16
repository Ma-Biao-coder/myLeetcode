/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size
    this.list = []
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    let firstNum = 0
    if (this.list.length >= this.size) {
        // 超出限制 list的length大于等于 等于说明满了 得先腾出一个位置
        firstNum = this.list.shift()
    }
    this.list.push(val)
    // 用之前的sum减去头部值，然后加上最后的值
    this.sum += val - firstNum
    return this.sum / this.list.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */