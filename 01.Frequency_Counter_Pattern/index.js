/**
* Write a function called same, which accepts two arrays. 
* The function should return true if every value in the array has it's corresponding value squared in the second array. 
* The frequency of values must be the same.
*/

/**
 * Checks if every value in the first array has its corresponding value
 * squared in the second array. The frequency of values must be the same.
 * @param {Array} arr1 - First array to compare
 * @param {Array} arr2 - Second array to compare
 * @returns {boolean} true if the condition is met, false otherwise
 */
function same(arr1, arr2) {
    // If the arrays have different length, return false
    if (arr1.length !== arr2.length) {
        return false
    }

    // Iterate over arr1 and check if each value has its squared value in arr2
    for (let i = 0; i < arr1.length; i++) {
        // Find the index of the squared value in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // If the squared value is not present in arr2, return false
        if (correctIndex === -1) {
            return false
        }
        // Remove the found element from arr2 to prevent duplicates
        arr2.splice(correctIndex, 1)
    }
    // If all values pass the check, return true
    return true
}

/**
 * Returns true if every value in the first array has its corresponding
 * value squared in the second array. The frequency of values must be the
 * same in both arrays.
 * @param {Array} arr1 - First array to compare
 * @param {Array} arr2 - Second array to compare
 * @returns {boolean} true if the condition is met, false otherwise
 */
function same2(arr1, arr2) {
    // If the arrays have different length, return false
    if (arr1.length !== arr2.length) {
        return false
    }

    /**
     * An object that maps values of arr1 to their frequency
     * @type {Object.<number, number>}
     */
    let frequencyCounter1 = {}
    /**
     * An object that maps values of arr2 to their frequency
     * @type {Object.<number, number>}
     */
    let frequencyCounter2 = {}

    // Iterate over arr1 and increment the value's frequency
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // Iterate over arr2 and increment the value's frequency
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    // Iterate over arr1 and check if each value has its squared value in arr2
    for (let key in frequencyCounter1) {
        // If the squared value is not present in arr2, return false
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // If the frequency of the squared value is not the same, return false
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    // Log the frequency counters to the console for debugging
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    // If all values pass the check, return true
    return true
}


arr1 = [1, 2, 3]
arr2 = [4, 1, 9]

same2(arr1, arr2)
