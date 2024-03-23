/**
 * Count Unique Values
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * Bonus - You must do this with constant or O(1) space and O(n) time.
*/

/**
 * Count Unique Values
 * Given a sorted array, count the number of unique values.
 * @param  {Array} arr Sorted array
 * @return {Number}    Number of unique values
 */
function countUniqueValues(arr) {
    // Base case: If array is empty, return 0
    if (arr.length === 0) return 0

    // Initialize a pointer for the first unique value
    let i = 0

    // Loop through the array, starting from the second element
    for (let j = 1; j < arr.length; j++) {
        // If the current element is not equal to the previous one
        if (arr[i] !== arr[j]) {
            // Increment the unique value pointer and set the current element
            // as the new unique value
            i++
            arr[i] = arr[j]
            console.log(arr)
        }
    }

    // Return the number of unique values + 1 (since the loop ends before i++)
    return i + 1
}

console.log(countUniqueValues([1, 1, 2, 3, 4, 5, 5]))
