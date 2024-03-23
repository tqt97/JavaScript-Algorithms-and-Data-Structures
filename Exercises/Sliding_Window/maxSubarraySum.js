/**
 * Given an array of integers and a number, write a function called maxSubarraySum, 
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
 * 
 * Note that a subarray must consist of consecutive elements from the original array. 
 * In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 * 
 * Constraints:
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */

/**
 * Given an array of integers and a number, finds the maximum sum of a subarray
 * with the length of the number passed to the function.
 *
 * @param {array} arr - Array of integers
 * @param {number} num - Length of subarray
 * @returns {number} Maximum sum of subarray
 */
function maxSubarraySum(arr, num) {
    // If the array is smaller than the requested subarray length, return null
    if (arr.length < num) {
        return null
    }

    // Initialize variables to keep track of the maximum sum and the current sum
    let total = 0
    for (let i = 0; i < num; i++) {
        total += arr[i]
    }
    let currentTotal = total

    // Loop through the rest of the array, subtracting the first element of the
    // subarray and adding the next element, and keeping track of the maximum sum
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num]
        total = Math.max(total, currentTotal)
    }

    // Return the maximum sum
    return total
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))