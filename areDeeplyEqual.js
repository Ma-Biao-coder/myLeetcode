function areDeeplyEqual(o1, o2) {
    if (o1 === o2) {
        return true
    }
    if (typeof o1 !== typeof o2) {
        return false
    }
    if (typeof o1 !== 'object') {
        return false
    }
    if (o1 === null || o2 === null) {
        return false
    }
    if (Object.keys(o1).length !== Object.keys(o2).length) {
        return false
    }
    for (let key in o1) {
        if (!areDeeplyEqual(o1[key], o2[key])) {
            return false
        }
    }
    return true
}
