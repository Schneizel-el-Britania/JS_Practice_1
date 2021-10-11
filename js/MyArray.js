/* data */
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
/* logic */
function MyArrayProto() {
  this.push = function () { //1,2,3,4,5,8
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const item = this[--this.length];
    delete this[this.length];
    return item;
  }
  this.forEach = function (func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
  }
  this.some = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        return true;
      }
    }
    return false;
  }
  this.every = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i]) === false) {
        return false;
      }
    }
    return true;
  }
  this.filter = function (func) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  }

  this.map = function (func) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(func(this[i]));
    }
    return result;
  }

  const getArrValues = function (arr) {
    let resultArray = new MyArray();
    for (let i = 0; i < arr.length; i++) {
      resultArray.push(arr[i]);
    }
    return resultArray;
  }
  this.concat = function () {
    let resultArray = getArrValues(this);
    for (array of arguments) {
      for (let i = 0; i < array.length; i++) {
        resultArray.push(array[i]);
      }
    }
    return resultArray;
  }


  const swap = function (array, first, last) {
    const temp = array[first];
    array[first] = array[last];
    array[last] = temp;
  }
  this.reverse = function () {
    let arrLastElem = this.length - 1;
    for (let i = 0; i < Math.floor(arrLastElem / 2); i++) {
      swap(this, i, arrLastElem - i);
    }
    return this;
  }

  this.unshift = function () {
    for (let j = this.length + arguments.length - 1; j >= 0; j--) {
      this[j] = this[j - arguments.length] ? this[j - arguments.length] : arguments[j];
    }
    return (this.length += arguments.length);
  };

  this.shift = function () {
    if (!this.length) {
      return;
    }
    const deletedItem = this[0];
    delete this[0];
    this.length--;

    return deletedItem;
  };

}

/* Prototype */
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(1, 4, 7, 14, 5, 45, 7, 88);
const doubles = myArray.map(function (num) {
  return num * 2;
});
console.log('map:', doubles);
console.log('myArray reverse:', myArray.reverse());
console.log('myArray concat:', myArray.concat(new MyArray(33, 55, 66), new MyArray(77, 88, 66)));

const unshiftMyArray = new MyArray(1, 2, 3);
console.log('unshift:', unshiftMyArray.unshift(4, 5, 6), unshiftMyArray);

const shiftMyArray = new MyArray('afds', 'csass', 'hhrwww');
console.log('shift:', shiftMyArray.shift(), shiftMyArray);
console.log('shift:', new MyArray().shift());