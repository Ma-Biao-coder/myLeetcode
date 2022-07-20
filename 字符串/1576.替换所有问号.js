/**
 * @param {string} s
 * @return {string}
 */
var replaceQues = function(s){
    let n = s.length
    let res = ''
    for(let i = 0; i < n; i++){
        if(s[i] === '?'){
            // 只要和左右不相等即可，因而只用准备三个字母
            let temp = 'abc'
            let index = 0
            while(res[i - 1] === temp[index] || s[i + 1] === temp[index]){
                index ++
            }
            res += temp[index]
        }else{
            res += s[i]
        }
    }
    return res
}