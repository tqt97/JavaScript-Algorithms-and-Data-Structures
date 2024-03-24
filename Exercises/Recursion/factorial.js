/**
 * Write a function factorial which accepts a number and returns the factorial of that number. 
 * A factorial is the product of an integer and all the integers below it; 
 * e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
 * factorial zero (0!) is always 1
 */


/**
 * Recursive function to calculate the factorial of a given number.
 * @param {number} num - The number to calculate the factorial of.
 * @returns {number} The factorial of the given number.
 */
function factorial(num) {
    // Base case: If the number is 0 or 1, return 1
    if (num < 0) return 0
    if (num <= 1) return 1

    // Recursive case: If the number is greater than 1, multiply it by the factorial of the previous number
    return num * factorial(num - 1)
}


console.log(factorial(5))