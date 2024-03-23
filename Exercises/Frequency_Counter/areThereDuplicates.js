/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
 * and checks whether there are any duplicates among the arguments passed in.  
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * 
 * Restrictions:
 * Time - O(n) | Space - O(n)
 * 
 * Bonus:
 * Time - O(n log n)
 * Space - O(1)
 */

/**
 * areThereDuplicates Solution (Frequency Counter)
 * 
 * @return {boolean} True if there are duplicates, false otherwise
 */
function areThereDuplicates1() {
    /**
     * An object that maps arguments to their frequency
     * @type {Object.<any, number>}
     */
    let collection = {}

    // Loop over the arguments and increment the value's frequency
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }

    // Loop over the collection and check if any value has a frequency greater than 1
    for (let key in collection) {
        if (collection[key] > 1) return true
    }

    // If we reach this point, there are no duplicates
    return false
}


/**
 * areThereDuplicates Solution (Multiple Pointers)
 * 
 * @param  {any} args - Variable number of arguments to check for duplicates
 * @return {boolean}  True if there are duplicates, false otherwise
 */
function areThereDuplicates2(...args) {
    // Sort the arguments in ascending order
    args.sort((a, b) => {
        // If a is less than b, return -1
        if (a < b) return -1
        // If a is greater than b, return 1
        if (a > b) return 1
        // Otherwise, they must be equal, so return 0
        return 0
    })

    // Initialize two indices to iterate over the sorted arguments
    let start = 0
    let next = 1

    // Loop until we reach the end of the arguments
    while (next < args.length) {
        // If the current argument and the next argument are the same, return true
        if (args[start] === args[next]) {
            return true
        }
        // Otherwise, increment the indices and continue the loop
        start++
        next++
    }
    // If we reach the end without finding a duplicate, return false
    return false
}



/**
 * areThereDuplicates One Liner Solution
 */
function areThereDuplicates3() {
    /**
     * Set data structure will automatically remove duplicates
     * and the Set.size property gives us the number of unique elements
     */
    return new Set(arguments).size !== arguments.length
}


console.log(areThereDuplicates1(1, 2, 3, 3, 4, 5))
console.log(areThereDuplicates2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(areThereDuplicates3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))