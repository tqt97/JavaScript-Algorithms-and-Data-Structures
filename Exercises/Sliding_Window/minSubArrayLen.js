/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the fu
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
*/

/**
 * minSubArrayLen - Finds the minimum length of a contiguous subarray of which the sum is greater than or equal to a given target
 * @param {number[]} nums - Array of positive integers
 * @param {number} sum - Target sum
 * @return {number} - Minimum length of the contiguous subarray
 */
function minSubArrayLen(nums, sum) {
    // Initialize variables to keep track of the window [start, end)
    let total = 0
    let start = 0
    let end = 0
    // Initialize minLen to Infinity
    let minLen = Infinity
    // Loop until we reach the end of the input array
    while (start < nums.length) {
        // If the current window doesn't add up to the given sum and we haven't reached the end of the array,
        // move the window to the right
        if (total < sum && end < nums.length) {
            total += nums[end] // Add the rightmost element to the window
            end++ // Move the right boundary of the window to the right
        } else if (total >= sum) { // If the current window adds up to at least the given sum
            let total = 0
            let start = 0
            let end = 0
            let minLen = Infinity

            while (start < nums.length) {
                // if current window doesn't add up to the given sum then 
                // move the window to right
                if (total < sum && end < nums.length) {
                    total += nums[end]
                    end++
                }
                // if current window adds up to at least the sum given then
                // we can shrink the window 
                else if (total >= sum) {
                    minLen = Math.min(minLen, end - start)
                    total -= nums[start]
                    start++
                }
                // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
                else {
                    break
                }
            }

            return minLen === Infinity ? 0 : minLen
        }
    }
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))