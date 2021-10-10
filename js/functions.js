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
  for (const item of array) {
    num === item ? count++ : count = 0;
    if (count === 2) {
      break;
    }
  }

  return count === 2;
}


/**
 * Fill array by random value
 * @param {Array} array 
 * @param {Number} size 
 * @param {Number} max 
 * @param {Number} min 
 * @returns Array
 */
const fillRandValue = function (array, size, min, max) {
  for (let i = 0; i < size; i++) {
    array[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return array;
}

/**
 * Return minimal and maximal values of array
 * @param {Array} array 
 * @returns Array[min, max]
 */
const getMinMaxValues = function (array) {
  let min = array[0];
  let max = array[0];

  for (const item of array) {
    min >= item ? min = item : null;
    max <= item ? max = item : null;
  }
  return [min, max];
}

/**
 * Return average value of array
 * @param {Array} array 
 * @returns Number
 */
const getAverageValue = function (array) {
  let result = 0;
  for (const item of array) {
    result += item / array.length;
  }
  return result;
}


