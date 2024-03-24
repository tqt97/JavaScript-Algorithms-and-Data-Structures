/**
 * Write a function called recursiveRange 
 * which accepts a number and adds up all the numbers from 0 to the number passed to the function 
 */


/**
 * Recursive function to add up all the numbers from 0 to the given number.
 * @param {number} num - The number to add up to
 * @returns {number} The sum of all the numbers from 0 to num
 */
function recursiveRange(num) {
    // Base case: If the number is 0, return 0
    if (num === 0) {
        return 0
    }
    // Recursive case: If the number is greater than 0, add it to the sum of the previous number
    return num + recursiveRange(num - 1)
}


console.log(recursiveRange(6))