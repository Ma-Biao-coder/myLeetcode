function twoSum(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        const index = findIndex(map, complement)
        if (index !== -1) {
            return [index, i]
        }
        map.set(nums[i], i)
    }
}

function findIndex(map, complement) {
    if (map.has(complement)) {
        return map.get(complement)
    }
    return -1
}
