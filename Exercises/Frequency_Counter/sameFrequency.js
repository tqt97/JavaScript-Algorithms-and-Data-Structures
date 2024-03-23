/**
 * Write a function called sameFrequency. 
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Space: O(N)
 * Time: O(N)
 */


/**
 * Check if two positive integers have the same frequency of digits.
 * @param  {number} num1 First number to compare
 * @param  {number} num2 Second number to compare
 * @return {boolean}      True if both numbers have the same frequency of digits, false otherwise
 */
function sameFrequency(num1, num2) {
    // Check if the two numbers have the same length
    if (num1.toString().length !== num2.toString().length) {
        return false
    }

    // Create two objects to store the frequency of each digit
    let countNum1 = {}
    let countNum2 = {}

    // Loop through each number and increment the corresponding digit frequency
    for (let i = 0; i < num1.toString().length; i++) {
        countNum1[num1.toString()[i]] = (countNum1[num1.toString()[i]] || 0) + 1
    }

    for (let j = 0; j < num2.toString().length; j++) {
        countNum2[num2.toString()[j]] = (countNum2[num2.toString()[j]] || 0) + 1
    }

    // Check if both objects have the same keys and values
    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) {
            return false
        }
    }

    return true
}

console.log(sameFrequency(182, 281))