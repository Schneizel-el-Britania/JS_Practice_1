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



const deleteItems = function (start, deleteCount, arr) {
  let i = 0;
  let removedItemsArray = [];
  while (i < deleteCount) {
    removedItemsArray[i] = arr[start + i];
    delete arr[start + i++];
  }
  return removedItemsArray;
}

const normalizeIndexes = function (start, arr) {
  let k = 0;
  for (let j = start; j < arr.length; j++) {
    while (arr[start + k] === undefined) { k++; }
    arr[j] = arr[k + j];
  }
}

const getItems = function (startValue, args) {
  let items = [];
  for (let i = startValue; i < args.length; i++) {
    items[i - startValue] = args[i];
  }
  return items;
}

const insertItems = function (start, arr, items) {
  for (let i = arr.length - 1; i >= start; i--) {
    arr[i + items.length] = arr[i];
  }
  for (let i = 0; i < items.length; i++) {
    arr[start + i] = items[i];
  }
}

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

    removedItemsArray = deleteItems(start, deleteCount, this);
    if (start + deleteCount !== this.length) {
      normalizeIndexes(start, this);
    }
    this.length -= deleteCount;
  }


  if (arguments.length > defaultParamsCount) {
    let itemN = getItems(defaultParamsCount, arguments);
    insertItems(start, this, itemN);
  }
  return removedItemsArray;

}


const isSorted = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      return false;
    }
  }
  return true;

}
/**
 * Custom sort method
 * @returns array[]
 */
const customSort = function () {
  while (!isSorted(this)) {
    let i = 0;
    while (i < this.length) {
      if (this[i] > this[i + 1]) {
        const temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
      i++;
    }
  }
  return this;
}



Array.prototype.customConcat = customConcat;
Array.prototype.customReverse = customReverse;
Array.prototype.customPush = customPush;
Array.prototype.customUnshift = customUnshift;
Array.prototype.customShift = customShift;
Array.prototype.customPop = customPop;
Array.prototype.customSlice = customSlice;
Array.prototype.customSplice = customSplice;
Array.prototype.customSort = customSort;