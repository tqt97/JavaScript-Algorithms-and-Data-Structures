/**
 * Write a function called findLongestSubstring, 
 * which accepts a string and returns the length of the longest substring with all distinct characters.
 * 
 * Time Complexity - O(n)
 */

/**
 * Finds the length of the longest substring with all distinct characters.
 * @param {string} str - Input string
 * @return {number} Length of the longest substring with all distinct characters
 */
function findLongestSubstring(str) {
    // Initialize variables to keep track of the longest substring and the current substring
    let longest = 0
    let seen = {}
    let start = 0

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Current character
        let char = str[i]

        // If the character has already been seen before, we need to move the start index forward
        if (seen[char]) {
            // We don't want to double count any characters, so we'll move the start index forward to the character's index + 1
            start = Math.max(start, seen[char])
        }

        // Update the length of the current substring
        longest = Math.max(longest, i - start + 1)

        // Store the index of the next occurrence of the character so that we don't double count
        seen[char] = i + 1
    }

    // Return the length of the longest substring
    return longest
}


console.log(findLongestSubstring(''))
console.log(findLongestSubstring('hello worlds how are you'))