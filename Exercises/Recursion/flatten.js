/**
 * Write a recursive function called flatten 
 * which accepts an array of arrays and returns a new array with all values flattened.
 */

/**
 * Recursively flattens an array of arrays into a single array.
 * @param {Array} arr - Array of arrays to flatten
 * @returns {Array} New array with all values flattened
 */
function flatten(arr) {
    // Initialize an empty array to store the flattened values
    let flattened = []

    // Loop through the original array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is an array, recursively flatten it
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(flatten(arr[i]))
        }
        // Otherwise, just add the element to the new array
        else {
            flattened.push(arr[i])
        }
    }

    // Return the flattened array
    return flattened
}
