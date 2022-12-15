/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let num = transform(s)
    let res = 0
    while(k > 0){
        res = calculation(num)
        k--
    }
    return res 
};

const transform = s => {
    const nums = new  Array(s.length).fill(0)
    for(let i = 0; i < s.length; i++){
        nums[i] = s[i].charCodeAt() - 'a'.charCodeAt() + 1
    }
    let strOfNums = nums.join('')
    // let ans = 0
    // for(let i = 0; i < strOfNums.length; i++){
    //     ans += strOfNums[i] * 1
    // }
    // return 
    return strOfNums * 1
}

const calculation = num => {
    let s = num + ''
    let ans = 0
    for(let i = 0; i < s.length; i++){
        ans += s[i] * 1
    }
    return ans
}

getLucky('iiii',2)