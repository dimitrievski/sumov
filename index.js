'use strict';

/**
 * Checks if parameter is a number
 * 
 * @param {Number} number
 * @returns {Boolean}
 */
function isNumber(number) {
    return isFinite(number) && !isNaN(parseFloat(number));
}

/**
 * Checks if parameter is an object
 * 
 * @param {Object} object
 * @returns {Boolean}
 */
function isObject(object) {
    return object === Object(object);
}

/**
 * Computes the sum of all numeric values in an object
 * 
 * @param {Object} object
 * @returns {Number}
 */
function sumObjectValues(object) {
    var s = 0;
    for (var i in object) {
        s += sumov(object[i]);
    }
    return s;
}

/**
 * Computes the sum of all numeric values in an object
 * 
 * @param {Object} object
 * @returns {Number}
 * @example
 *
 * sumov({a: 2, b: ["2", null, [], {a: {a: -1.0}}], c: {quick: "maths"}});
 * => 3
 */
function sumov(object) {
    if (isNumber(object)) {
        return parseFloat(object);
    } else if (isObject(object)) {
        return sumObjectValues(object);
    } else {
        return  0;
    }
}

/**
 * Expose function
 */
module.exports = sumov;