/**
 * Write a function called power which accepts a base and an exponent. 
 * The function should return the power of the base to the exponent. 
 * This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */


/**
 * Recursive function to calculate the power of a base to an exponent
 * @param {number} number - The base
 * @param {number} n - The exponent
 * @returns {number} The result of the power operation
 */
function power(number, n) {
    /**
     * Base case: If the exponent is 0, return 1
     */
    if (n === 0) {
        return 1
    }

    /**
     * Recursive case: Calculate the power of the base to the exponent by
     * multiplying the base by itself n - 1 times, and return the result.
     */
    return number * power(number, n - 1)
}

console.log(power(2, 3))