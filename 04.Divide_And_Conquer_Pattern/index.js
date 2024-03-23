/**
 * Given an sorted array of integers, write a function call search, 
 * that accepts a value and return the index of that value if it is in the array. 
 * Otherwise, return -1. 
 */

/**
 * Search for a value in a sorted array
 * @param {Array} arr - The sorted array to search in
 * @param {number} val - The value to search for
 * @returns {number} The index of the value if found, -1 otherwise
 */
function search(arr, val) {
    /**
     * The starting index of the search range
     * @type {number}
     */
    let min = 0
    /**
     * The ending index of the search range
     * @type {number}
     */
    let max = arr.length - 1

    /**
     * While the search range has not been narrowed down to 1 element
     */
    while (min <= max) {
        /**
         * The index of the middle element of the search range
         * @type {number}
         */
        let middle = Math.floor((min + max) / 2)
        /**
         * The value of the middle element of the search range
         * @type {number}
         */
        let currentElement = arr[middle]

        /**
         * If the middle element is less than the value,
         * set the minimum index to the middle index + 1,
         * otherwise, set the maximum index to the middle index - 1
         */
        if (currentElement < val) {
            min = middle + 1
        } else if (currentElement > val) {
            max = middle - 1
        } else {
            /**
             * If the middle element is equal to the value,
             * return the middle index
             */
            return middle
        }
    }
    /**
     * If the value is not found in the array, return -1
     */
    return -1
}

console.log(search([1, 2, 3, 4, 5, 6], 4))