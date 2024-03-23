/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/


/**
 * Given two strings, determine if the second string is an anagram of the first.
 * @param {string} str1 - First string to compare
 * @param {string} str2 - Second string to compare
 * @returns {boolean} true if str2 is an anagram of str1, false otherwise
 */
function validAnagram(str1, str2) {
    // Both strings must have the same length to be anagrams
    if (str1.length !== str2.length) {
        return false
    }

    /**
     * Map of letters from str1 to their frequency
     * @type {Object.<string, number>}
     */
    const lookup = {}

    // Iterate over str1 and increment the letter frequency in lookup
    for (let i = 0; i < str1.length; i++) {
        const letter = str1[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    console.log(lookup)

    // Iterate over str2 and decrement the letter frequency in lookup
    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i]

        // If the letter is not in lookup or the frequency is 0, return false
        if (!lookup[letter] || lookup[letter] === 0) {
            return false
        }
        // Otherwise, decrement the letter frequency in lookup
        lookup[letter] -= 1
        console.log(lookup)
    }

    // If all letters have a frequency of 0, return true
    return true
}

if (validAnagram('tuana', 'tuana')) {
    console.log('true')
}