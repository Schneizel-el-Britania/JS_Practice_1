
/**
 * Custom concat method
 * @returns array[]
 */
const customConcat = function () {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray[i] = this[i];
  }

  let i = resultArray.length;
  for (array of arguments) {
    for (let j = 0; j < array.length; j++) {
      resultArray[i++] = array[j];
    }
  }
  return resultArray;
}
Array.prototype.customConcat = customConcat;

const concatArray = [2, 4].customConcat([0, 1], [2, 3, 5], [4, 5, 5]);
console.log(concatArray);


/**
 * Custom reverse method
 * @returns array[]
 */
const customReverse = function () {
  let reversedArray = [];
  let i = 0;
  for (let j = this.length - 1; j >= 0; j--) {
    reversedArray[i++] = this[j];
  }
  return reversedArray;
}
Array.prototype.customReverse = customReverse;

const reverseArray = ['v', 'o', 'v', 'a'].customReverse();
console.log(reverseArray);


/**
 * Custom push method
 * @returns array.lenght
 */
const customPush = function () {
  for (item in arguments) {
    this[this.length++] = item;
  }
  return this.length;
}
Array.prototype.customPush = customPush;

const pushArray = [1, 2, 3];
console.log(pushArray.customPush(4, 5), pushArray);


/**
 * Custom unshift method
 * @returns array.lenght
 */
const customUnshift = function () {
  for (let j = this.length + arguments.length - 1; j >= 0; j--) {
    this[j] = this[j - arguments.length] ? this[j - arguments.length] : arguments[j];
  }
  return this.length;
}
Array.prototype.customUnshift = customUnshift;

const unshiftArray = [1, 2, 3];
console.log(unshiftArray.customUnshift(4, 5, 6), unshiftArray);