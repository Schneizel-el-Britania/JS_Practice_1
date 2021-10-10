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


/**
 * Check if two numbers together contains in array
 * @param {Number} num 
 * @param {Array} array 
 * @returns boolean
 */
const hasTwoEqualNumTogether = function (num, array) {
  for (item of array) {
    num === item ? count++ : count = 0;
    if (count === 2) {
      break;
    }
  }

  return count === 2;
}