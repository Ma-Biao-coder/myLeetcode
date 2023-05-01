// write a quicksort function
// use es6 syntax
function quickSort(nums) {
    if (nums.length <= 1) {
        return nums
    }
    let pivot = nums[nums.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function partition(nums, left, right) {
    let pivot = nums[right]
    let i = left - 1
    for (let j = left; j < right; j++) {
        if (nums[j] < pivot) {
            i++
            swap(nums, i, j)
        }
    }
    swap(nums, i + 1, right)
    return i + 1
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

function quickSortHelper(nums, left, right) {
    if (left < right) {
        let pivot = partition(nums, left, right)
        quickSortHelper(nums, left, pivot - 1)
        quickSortHelper(nums, pivot + 1, right)
    }
}

function quickSort(nums) {
    quickSortHelper(nums, 0, nums.length - 1)
    return nums
}
// wrtie a test case
console.log(quickSort([1, 3, 2, 5, 4, 7, 6, 9, 8]))

function arithmeticTriplets(nums, diff) {
    function hasNextNumber(num, diff) {
        return nums.includes(num + diff)
    }
    let res = 0
    nums.forEach((num) => {
        if (hasNextNumber(num, diff) && hasNextNumber(num, 2 * diff)) {
            res++
        }
    })
    return res
}

/**
 * Counts the number of arithmetic triplets in an array that have a common difference of 'diff'
 * @param {number[]} nums - The array of integers to search for triplets
 * @param {number} diff - The common difference between the elements in each triplet
 * @returns {number} The number of arithmetic triplets found in the array
 */
function arithmeticTriplets(nums, diff) {
    /**
     * Checks if the array contains an element that is 'diff' more than 'num'
     * @param {number} num - The number to check for
     * @param {number} diff - The difference between the number to check and the element to search for
     * @returns {boolean} True if the array contains an element that is 'diff' more than 'num', false otherwise
     */
    function hasNextNumber(num, diff) {
        return nums.includes(num + diff)
    }

    let res = 0
    nums.forEach((num) => {
        if (hasNextNumber(num, diff) && hasNextNumber(num, 2 * diff)) {
            res++
        }
    })

    return res
}
