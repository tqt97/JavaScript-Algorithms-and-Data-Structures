/**
 * Write a recursive function called capitalizeFirst. 
 * Given an array of strings, capitalize the first letter of each string in the array.
 */

/**
 * Recursively capitalizes the first letter of each string in an array.
 *
 * @param {string[]} arr - Array of strings to capitalize
 * @returns {string[]} Array of capitalized strings
 */
function capitalizeFirst(array) {
    // Base case: If the array has only one element, capitalize it and return it
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)]
    }
    // Recursive case: Capitalize all but the last word in the array, and add the
    // capitalized last word to the result
    const res = capitalizeFirst(array.slice(0, -1))
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1)
    res.push(string)
    return res
}

console.log(capitalizeFirst(['car', 'taco', 'banana']))
