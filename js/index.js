
/**
 * Custom concat method
 * @returns array[]
 */
const customConcat = function () {
  let resultArray = [];
  let i = 0;
  for (array of arguments) {
    for (let j = 0; j < array.length; j++) {
      resultArray[i++] = array[j];
    }
  }
  return resultArray;
}
Array.prototype.customConcat = customConcat;

const concatArray = [].customConcat([0, 1], [2, 3, 5], [4, 5, 5]);
console.log(concatArray);
