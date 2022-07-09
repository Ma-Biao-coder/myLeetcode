/**
 * 
 * @param {string[]} deadends 
 * @param {string} target 
 */
var openLock = function (deadends, target) {
    const deads = new Set()
    // 记录所有的deadend
    for (let dead of deadends) {
        deads.add(dead)
    }
    // 用visited避免走回头路
    const visited = new Set()
    let count = 0
    // 启动BFS
    const queue = []
    queue.push('0000') // 从0000开始
    visited.add('0000')
    while (queue.length) {
        let sz = queue.length
        for (let i = 0; i < sz; i++) {
            let cur = queue.shift()
            if (cur === target) {
                return count
            }
            // 如果在deads里 则跳过
            if (deads.has(cur)) {
                continue
            }
            // 处理完cur之后，将cur向四周扩散，加到queue中
            for (let j = 0; j < 4; j++) {
                let up = plusOne(cur, j)
                // 注意这里添加到queue的条件，类比 root.left && queue.push(root.left)
                if (!visited.has(up)) {
                    queue.push(up)
                    visited.add(up)
                }
                let down = minusOne(cur, j)
                if (!visited.has(down)) {
                    queue.push(down)
                    visited.add(down)
                }
            }
        }
        // 注意 +1 的位置 是在处理完一层的之后 因为这里要最小次数
        count++
    }
    return -1
}

const plusOne = (s, j) => {
    const ch = s.split('')
    if (ch[j] === '9') {
        ch[j] = '0'
    } else {
        ch[j] = parseInt(ch[j]) + 1 + ''
    }
    return ch.join('')
}

const minusOne = (s, j) => {
    const ch = s.split('')
    if (ch[j] === '0') {
        ch[j] = '9'
    } else {
        ch[j] = parseInt(ch[j]) - 1 + ''
    }
    return ch.join('')
}