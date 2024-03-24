/**
 * Write a recursive function called fibonacci 
 * which accepts a number and returns the nth number in the Fibonacci sequence. 
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */


/**
 * Fibonacci sequence recursive function
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} The nth number in the Fibonacci sequence
 */
function fibonacci(n) {
    // Base case: If the position is less than or equal to 2, return 1
    if (n <= 2) {
        return 1
    }
    // Recursive case: Return the sum of the previous two fibonacci numbers
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(4))