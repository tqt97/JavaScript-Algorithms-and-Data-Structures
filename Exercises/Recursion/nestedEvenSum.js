/**
 * Write a recursive function called nestedEvenSum. 
 * Return the sum of all even numbers in an object which may contain nested objects.
 */

/**
 * Recursively sums up all even numbers in a nested object.
 * @param {object} obj - The nested object to search
 * @param {number} [sum=0] - The running total of even numbers found
 * @returns {number} The sum of all even numbers in the nested object
 */
function nestedEvenSum(obj, sum = 0) {
    // Loop through each key in the object
    for (var key in obj) {
        // If the value is an object, recursively call nestedEvenSum on it
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key])
            // If the value is a number and even, add it to the sum
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key]
        }
    }
    // Return the sum of all even numbers in the nested object
    return sum
}

console.log(nestedEvenSum({ a: 2, b: { c: 5, d: 6 }, e: 7 }))