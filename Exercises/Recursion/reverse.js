/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */


/**
 * Reverses a string using recursion.
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */
function reverse(str) {
    // Base case: if the string is empty, return it as is
    if (str.length <= 1) return str
    // Recursive case: if the string is not empty,
    // reverse the substring starting from the second character
    // and add the first character to the end of the string
    return reverse(str.slice(1)) + str[0]
}

console.log(reverse('awesome'))
