/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    //create an empty array to store the results
    const res = []

    //create a variable to store the length of the nums array
    const n = nums.length

    //if there are less than 3 numbers in the array, return an empty array
    if (!nums || n < 3) return res

    //sort the array from smallest to largest
    nums.sort((a, b) => a - b)

    //iterate through the array
    for (let i = 0; i < n; i++) {
        //if the current number is greater than 0, break out of the loop
        if (nums[i] > 0) break

        //if the current number is the same as the previous number, continue to the next iteration
        if (i > 0 && nums[i] === nums[i - 1]) continue

        //create variables to store the index of the next number and the last number in the array
        let l = i + 1,
            r = n - 1

        //while the index of the next number is less than the index of the last number in the array
        while (l < r) {
            //create a variable to store the sum of the current number, the next number, and the last number in the array
            const sum = nums[i] + nums[l] + nums[r]

            //if the sum is equal to 0
            if (sum === 0) {
                //push the current number, the next number, and the last number into the results array
                res.push(Array(nums[i], nums[r], nums[l]))
                //while the index of the next number is less than the index of the last number in the array and the next number is the same as the next number after it
                while (l < r && nums[l] === nums[l + 1]) l++ // skip same result
                //while the index of the next number is less than the index of the last number in the array and the last number is the same as the last number before it
                while (l < r && nums[r] === nums[r - 1]) r--
                //decrement the index of the last number
                r--
                //increment the index of the next number
                l++
            } else if (sum > 0) {
                //decrement the index of the last number
                r--
            } else {
                //increment the index of the next number
                l++
            }
        }
    }
    //return the results array
    return res
}

var threeSum = function (nums) {
    const res = []
    const n = nums.length
    if (!nums || n < 3) return res
    nums.sort((a, b) => a - b)

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let l = i + 1,
            r = n - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                res.push(Array(nums[i], nums[r], nums[l]))
                while (l < r && nums[l] === nums[l + 1]) l++ // skip same result
                while (l < r && nums[r] === nums[r - 1]) r--
                r--
                l++
            } else if (sum > 0) {
                r--
            } else {
                l++
            }
        }
    }
    return res
}
