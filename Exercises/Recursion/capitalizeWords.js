/**
 * Write a recursive function called capitalizeWords. 
 * Given an array of words, return a new array containing each word capitalized.
 */

/**
 * Recursively capitalizes each word in an array of words.
 * @param {string[]} array - Array of words to capitalize
 * @returns {string[]} New array with all words capitalized
 */
function capitalizeWords(array) {
    // Base case: If the array has only one element, capitalize it and return it
    if (array.length === 1) {
        return [array[0].toUpperCase()]
    }
    // Recursive case: Capitalize all but the last word in the array, and add the
    // capitalized last word to the result
    let res = capitalizeWords(array.slice(0, -1))
    res.push(array.slice(array.length - 1)[0].toUpperCase())
    return res
}

console.log(capitalizeWords(['car', 'taco', 'banana']))