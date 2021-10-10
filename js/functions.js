/**
 * Check if string contains in array
 * @param {String} string 
 * @param {Array} array 
 * @returns boolean
 */
const hasElems = function (string, array) {
  return array.some((word) => string === word);
};


/**
 * Check if number contains in array
 * @param {Number} num 
 * @param {Array} array 
 * @returns boolean
 */
const hasNum = function (num, array) {
  return array.some((item) => num === item);
}