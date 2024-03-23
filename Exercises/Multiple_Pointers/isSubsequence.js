/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * 
 * Your solution MUST have AT LEAST the following complexities:
 * Time Complexity - O(N + M) | Space Complexity - O(1)
 */

/**
 * isSubsequence Solution - Iterative
 * 
 * Checks if the characters in str1 form a subsequence of the characters in str2.
 * A subsequence is a sequence that is derived from another sequence by deleting
 * some or no elements without changing the order of the remaining elements.
 * 
 * @param {string} str1 - The sequence to search for in str2
 * @param {string} str2 - The sequence to search within
 * @returns {boolean} true if str1 is a subsequence of str2, false otherwise
 */
function isSubsequence1(str1, str2) {
    // Initialize a pointer for str1 and str2
    var i = 0
    var j = 0

    // If str1 is empty, it is a subsequence of every string
    if (!str1) return true

    // Loop through str2 and compare each character to the corresponding character in str1
    while (j < str2.length) {
        // If the characters match, increment the pointer for str1
        if (str2[j] === str1[i]) i++
        // If we have found a match for every character in str1, return true
        if (i === str1.length) return true
        // Otherwise, move on to the next character in str2
        j++
    }

    // If we reach the end of str2 without finding a match for every character in str1, return false
    return false
}



/**
 * isSubsequence Solution - Recursive but not O(1) Space
 * 
 * Checks if the characters in str1 form a subsequence of the characters in str2.
 * A subsequence is a sequence that is derived from another sequence by deleting
 * some or no elements without changing the order of the remaining elements.
 *
 * @param {string} str1 - The sequence to search for in str2
 * @param {string} str2 - The sequence to search within
 * @returns {boolean} true if str1 is a subsequence of str2, false otherwise
 */
function isSubsequence2(str1, str2) {
    // If str1 is empty, it is a subsequence of every string
    if (str1.length === 0) return true
    // If str2 is empty and str1 is not, it is not a subsequence
    if (str2.length === 0) return false
    // If the first character of str1 matches the first character of str2,
    // recursively check if the remaining characters in str1 form a subsequence
    // of the remaining characters in str2
    if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1))
    // Otherwise, recursively check if the characters in str1 form a subsequence
    // of the remaining characters in str2 by moving on to the next character in str2
    return isSubsequence2(str1, str2.slice(1))

}

console.log(isSubsequence1('hello', 'hello world'))
console.log(isSubsequence2('sing', 'sting'))
console.log(isSubsequence2('abc', 'abracadabra'))
console.log(isSubsequence2('abc', 'acb'))