
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


/**
 * Custom shift method
 * @returns deleted array[0]
 */
const customShift = function () {
  if (!this.length) {
    return;
  }
  const deletedItem = this[0];
  delete this[0];

  for (let i = 0; i < this.length; i++) {
    this[i] = this[++i];
  }
  this.length--;

  return deletedItem;
}
Array.prototype.customShift = customShift;

const shiftArray = ['js', 'css', 'html'];
console.log(shiftArray.customShift(), shiftArray);
console.log([].customShift());


/**
 * Custom pop method
 * @returns deleted array[arr.length - 1]
 */
const customPop = function () {
  if (!this.length) {
    return;
  }
  const deletedItem = this[this.length - 1];
  delete this[this.length-- - 1];
  return deletedItem;
}
Array.prototype.customPop = customPop;

const popArray = ['js', 'css', 'html'];
console.log(popArray.customPop(), popArray);
console.log([].customPop());


/**
 * Custom slice method
 * @returns array[]
 */
const customSlice = function (begin = 0, end = this.length) {
  let resultArray = [];
  if (end < 0) {
    end = this.length + end;
  }
  if (begin < 0) {
    begin = this.length + begin;
  }

  for (let i = begin; i < end; i++) {
    resultArray[i - begin] = this[i];
  }

  return resultArray;
}
Array.prototype.customSlice = customSlice;

const sliceArray = [1, 2, 3, 4, 5].customSlice(undefined, -2);
const sliceArray2 = [1, 2, 3, 4, 5].customSlice(-2);
console.log(sliceArray);
console.log(sliceArray2);


/**
 * Custom splice method
 * @returns deleted items array[]
 */
const customSplice = function (start, deleteCount) {
  const defaultParamsCount = 2;
  let removedItemsArray = [];

  if (start > this.length) {
    start = this.length;
  }
  if (start < 0) {
    start = this.length + start;
  }
  if (deleteCount === 0 && arguments.length === defaultParamsCount) {
    return null;
  }

  if (deleteCount) {
    if (start + deleteCount > this.length) {
      deleteCount = this.length - start;
    }
    let i = 0;
    while (i < deleteCount) {
      removedItemsArray[i] = this[start + i];
      delete this[start + i++];
    }

    if (start + deleteCount !== this.length) {
      let k = 0;
      for (let j = start; j < this.length; j++) {
        while (this[start + k] === undefined) { k++; }
        this[j] = this[k + j];
      }
    }
    this.length -= deleteCount;
  }


  if (arguments.length > defaultParamsCount) {
    let itemN = [];
    for (let i = defaultParamsCount; i < arguments.length; i++) {
      itemN[i - defaultParamsCount] = arguments[i];
    }

    for (let i = 0; i < itemN.length; i++) {
      this[this.length] = this[start + i];
      this[start + i] = itemN[i];
    }
  }
  return removedItemsArray;

}
Array.prototype.customSplice = customSplice;

const spliceArray1 = [1, 2, 3, 4, 5];
const spliceArray2 = [1, 2, 3, 4, 5];
const spliceArray3 = [1, 2, 3, 4, 5];
const spliceArray4 = [1, 2, 3, 4, 5];
console.log('splice:', spliceArray1.customSplice(1, 2), 'ready:', spliceArray1);
console.log('splice:', spliceArray2.customSplice(0, 1), spliceArray2.customSplice(-1, 1), 'ready:', spliceArray2);
spliceArray3.customSplice(3, 0, 'a', 'b', 'c');
console.log('splice:', 'ready:', spliceArray3);
spliceArray4.customSplice(1, 0, 'a', 'b');
spliceArray4.customSplice(-2, 0, 'c');
spliceArray4.customSplice(spliceArray4.length, 0, 'e');
console.log('splice:', 'ready:', spliceArray4);
