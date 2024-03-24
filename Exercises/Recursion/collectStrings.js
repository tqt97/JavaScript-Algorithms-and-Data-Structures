/**
 * Write a function called collectStrings 
 * which accepts an object and returns an array of all the values in the object that have a typeof string
 */

function collectStrings(obj) {
    let arr = []
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            arr.push(obj[key])
        } else if (typeof obj[key] === 'object') {
            arr = arr.concat(collectStrings(obj[key]))
        }
    }
    return arr
}

/**
 * Helper Method Recursion Version
 * 
 * Accepts an object and returns an array of all the values in the object that have a typeof string
 * @param {Object} obj The object to search for strings
 * @return {Array} An array of all the values in the object that are strings
 */
function collectStrings2(obj) {
    var stringsArr = [] // The array that will be returned

    /**
     * Recursively searches an object for strings and adds them to the stringsArr
     * @param {Object} o The object to search
     */
    function gatherStrings(o) {
        // Loop through each key in the object
        for (var key in o) {
            // If the value is a string, add it to the array
            if (typeof o[key] === 'string') {
                stringsArr.push(o[key]) // Add it to the stringsArr
            }
            // If the value is an object, recursively call gatherStrings on it
            else if (typeof o[key] === 'object') {
                gatherStrings(o[key]) // Recursively call gatherStrings on it
            }
        }
    }

    gatherStrings(obj) // Call gatherStrings on the obj passed in

    return stringsArr // Return the array of strings found
}


/**
 * Pure Recursion Version
 * 
 * Recursively searches an object for strings and returns an array of them
 * @param {Object} obj The object to search for strings
 * @return {Array} An array of all the values in the object that are strings
 */
function collectStrings3(obj) {
    var stringsArr = [] // The array that will be returned

    // Loop through each key in the object
    for (var key in obj) {
        // If the value is a string, add it to the array
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key])
            // If the value is an object, recursively call collectStrings on it and add its results to the array
        } else if (typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings3(obj[key]))
        }
    }

    // Return the array of strings found
    return stringsArr
}
