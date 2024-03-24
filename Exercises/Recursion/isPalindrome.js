/**
 * Write a recursive function called isPalindrome 
 * which returns true if the string passed to it is a palindrome (reads the same forward and backward). 
 * Otherwise it returns false.
 */

/**
 * Checks if a given string is a palindrome (reads the same forward and backward).
 *
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
    // Base case: If the string has only one character, it is a palindrome
    if (str.length === 1) {
        return true
    }

    // Base case: If the string has only two characters, it is a palindrome if and only if they are the same
    if (str.length === 2) {
        return str[0] === str[1]
    }

    // Recursive case: If the first character is the same as the last character,
    // recursively check if the remaining characters form a palindrome
    if (str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1, -1))
    }

    // Otherwise, the string is not a palindrome
    return false
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true