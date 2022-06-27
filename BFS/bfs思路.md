```js
 var levelOrder = function (root) {
        /**
         * 最终的结果是一个数组的数组
        */
        const res = []
        if (root === null) return res
        /**
         * queue用于存每一层
        */
        const queue = []
        queue.push(root)
        while (queue.length !== 0) {
            // 记录当前层级节点数
            let len = queue.length
            // list用于存每一层的结果
            const list = []
            for (let i = 0; i < len; i++) {
                // 遍历当前层
                let cur = queue.shift()
                list.push(cur.val)
                /**
                 * 存放当前层下一层的节点
                 * 也可以写成
                 * cur.left && queue.push(cur.left)
                 * cur.right && queue.push(cur.right)
                */
                if (cur.left) {
                    queue.push(cur.left)
                }
                if (cur.right) {
                    queue.push(cur.right)
                }
            }
            res.push(list)
        }
        return res
    }
```

// 最终结果
const res = []
// 需要维护的队列
const queue = []
//初始化
queue.push(root)
while(queue.length){
    let len = queue.length
    let 要加入到res里的东西
    for(let i = 0; i < len; i++){
        let cur = queue.shift()
        利用cur对 要加入到res里的东西  做处理
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
    }
    res.push(要加入到res里的东西)
}
return res