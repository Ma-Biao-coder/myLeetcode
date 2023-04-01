/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
    if (s.includes('@')) {
        return maskEmail(s)
    }
    if (validTel(s)) {
        return maskTel(s)
    }
}

function maskEmail(s) {
    let mail = s.toLowerCase()
    const locationOfAt = mail.indexOf('@')
    let name = mail.slice(0, locationOfAt)
    let domaineName = mail.slice(locationOfAt)
    let maskName = name[0] + '*'.repeat(5) + name.slice(-1)
    return maskName + domaineName
}

function maskTel(s) {
    const nums = s
        .split('')
        .filter((char) => '0123456789'.includes(char))
        .join('')
    const n = nums.length
    if (n === 10) {
        return '*'.repeat(3) + '-' + '*'.repeat(3) + '-' + nums.slice(-4)
    }
    return `+${'*'.repeat(n - 10)}-***-***-${nums.slice(-4)}`
}

function validTel(s) {
    const nums = s
        .split('')
        .filter((char) => '0123456789'.includes(char))
        .join('')
    const n = nums.length
    if (9 < n < 14) {
        return true
    }
    return false
}
