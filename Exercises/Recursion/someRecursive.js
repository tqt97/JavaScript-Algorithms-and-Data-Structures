/**
 * Write a recursive function called someRecursive 
 * which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. 
 * Otherwise it returns false.
 */

/**
 * Recursively checks if a single value in an array passes a condition.
 * @param {Array} arr - The array to check
 * @param {Function} callback - The condition to check for
 * @returns {boolean} true if a single value in the array passes the condition, false otherwise
 */
function someRecursive(arr, callback) {
    // Base case: If the array is empty, return false
    if (arr.length === 0) {
        return false
    }
    // Recursive case: If the first element passes the condition, return true
    if (callback(arr[0])) {
        return true
    }
    // Recursive case: If the first element does not pass the condition, check the rest of the array
    return someRecursive(arr.slice(1), callback)
}

console.log(someRecursive([1, 2, 3, 4], (num) => num % 2 === 0))
console.log(someRecursive([1, 2, 3, 4], (num) => num % 2 === 1))