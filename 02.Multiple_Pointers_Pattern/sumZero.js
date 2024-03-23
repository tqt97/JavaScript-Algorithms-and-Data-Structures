/** 
 * Write a function called SumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/


/**
 * Finds the first pair in a sorted array of integers where the sum is 0.
 * @param {number[]} arr - Sorted array of integers
 * @returns {number[]|undefined} Array that includes both values that sum to zero
 * or undefined if a pair does not exist
 */
function sumZero(arr) {
    // Initialize pointers for the left and right ends of the array
    let left = 0
    let right = arr.length - 1

    console.log(arr[left], arr[right])

    // While the pointers are not yet on the same side of the array
    while (left < right) {
        // Calculate the sum of the elements at the pointers
        const sum = arr[left] + arr[right]

        // If the sum is 0, the pair has been found, return it
        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        // If the sum is greater than 0, move the right pointer to the left
        // because we want a pair with a sum less than or equal to 0
        else if (sum > 0) {
            right--
        }
        // If the sum is less than 0, move the left pointer to the right
        // because we want a pair with a sum greater than or equal to 0
        else {
            left++
        }
    }
}

console.log(sumZero([1, 2, 3, 4, 5, 6, 7, 8, 9, 15]))
console.log(sumZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]))