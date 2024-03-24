/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the fu
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
*/

/**
 * minSubArrayLen - Finds the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
 * @param {number[]} nums - Array of positive integers
 * @param {number} sum - Positive integer
 * @return {number} Minimal length of the contiguous subarray
 */
function minSubArrayLen(nums, sum) {
    // Initialize variables to keep track of the current window,
    // the total sum of the current window, and the minimal length
    // of the window found so far
    let start = 0
    let end = 0
    let total = 0
    let minLen = Infinity

    while (start < nums.length) {
        // If the current window doesn't add up to the given sum and
        // we haven't reached the end of the array, move the window to
        // the right
        if (total < sum && end < nums.length) {
            total += nums[end]
            end++
        }
        // If the current window adds up to at least the sum given then
        // we can shrink the window
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start)
            total -= nums[start]
            start++
        }
        // If we've reached the end of the array but the current total
        // is less than the required total, break out of the loop
        else {
            break
        }
    }

    // If no window of the required length is found, return 0.
    // Otherwise, return the minimal length of the window found
    return minLen === Infinity ? 0 : minLen
}


console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))