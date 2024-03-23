/**
 * Write a function call maxSubArraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

/**
 * - Sliding window pattern
 * - This pattern is used when we need to calculate a subset of an array
 * - It's a pattern that involves creating a window which can either be an array or number from one position to another
 * - The window is incrementally slid through the array
 * - The pattern will return the largest sum of n consecutive elements in the array
 * - This pattern has a time and space complexity of O(n)
 * - Time O(n) | Space O(1)
 * - where n is the length of the array
 * - https://en.wikipedia.org/wiki/Sliding_window 
*/

function maxSubArraySum(arr, num) {
    if (arr.length < num) return null
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}