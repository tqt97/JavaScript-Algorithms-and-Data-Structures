/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
 * Recursion would be a great way to solve this!
 * 
 * The exercise intends for you to create a new object with the numbers converted to strings, 
 * and not modify the original. Keep the original object unchanged.
 */

/**
 * Recursively traverses an object and converts all number values to strings.
 * @param {Object} obj The object to traverse
 * @returns {Object} A new object with all number values converted to strings
 */
function stringifyNumbers(obj) {
    var newObj = {} // Create a new object to store the converted values
    for (var key in obj) { // Loop over the keys in the original object
        if (typeof obj[key] === 'number') { // If the current value is a number
            newObj[key] = obj[key].toString() // Convert it to a string and store it in the new object
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) { // If the value is an object but not an array
            newObj[key] = stringifyNumbers(obj[key]) // Recursively call stringifyNumbers on it and store the result in the new object
        } else { // If the value is anything else, just store it as is
            newObj[key] = obj[key]
        }
    }
    return newObj // Return the new object with all number values converted to strings
}

console.log(stringifyNumbers({ num: 1, test: [], data: { val: 4, info: { isRight: true, random: 66 } } }))