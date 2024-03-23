/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.
 * 
 * Bonus Constraints:
 * Time: O(N) | Space: O(1)
 */

/**
 * Determines if a pair of values in a sorted array
 * equal the target average.
 * @param  {number[]} arr Sorted array of integers
 * @param  {number} num Target average
 * @return {boolean}     True if a pair exists, false otherwise
 */
function averagePair(arr, num) {
    /**
     * Initialize two pointers, start for the first element
     * and end for the last element of the array.
     */
    let start = 0;
    let end = arr.length - 1;

    /**
     * Loop while the pointers are not pointing to the same position.
     * Calculate the average of the two elements they are pointing to.
     * If the average is equal to the target, return true.
     * If the average is less than the target, increment the start pointer
     * because we want a higher average.
     * If the average is greater than the target, decrement the end pointer
     * because we want a lower average.
     */
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) return true;
        else if (avg < num) start++;
        else end--;
    }

    /**
     * If the loop completes without returning true, there is no pair
     * that equal the target average, so return false.
     */
    return false;
}

console.log(averagePair([1, 2, 3], 2.5))