/**
 * Write a function called productOfArray 
 * which takes in an array of numbers and returns the product of them all.
 */

/**
 * Recursively calculates the product of all the elements in an array.
 *
 * @param {number[]} arr - Array of numbers
 * @returns {number} The product of all the elements in the array
 */
function productOfArray(arr) {
    // Base case: If the array is empty, return 1
    if (arr.length === 0) {
        return 1;
    }

    // Recursive case: Take the first element and multiply it with the product
    // of the rest of the array
    return arr[0] * productOfArray(arr.slice(1));
}


console.log(productOfArray([1, 2, 3]))