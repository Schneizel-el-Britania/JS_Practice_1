const concatArray = [2, 4].customConcat([0, 1], [2, 3, 5], [4, 5, 5]);
console.log('concat:', concatArray);


const reverseArray = ['v', 'o', 'v', 'a'].customReverse();
console.log('reverse:', reverseArray);


const pushArray = [1, 2, 3];
console.log('push:', pushArray.customPush(4, 5), pushArray);


const unshiftArray = [1, 2, 3];
console.log('unshift:', unshiftArray.customUnshift(4, 5, 6), unshiftArray);


const shiftArray = ['js', 'css', 'html'];
console.log('shift:', shiftArray.customShift(), shiftArray);
console.log('shift:', [].customShift());


const popArray = ['js', 'css', 'html'];
console.log('pop:', popArray.customPop(), popArray);
console.log('pop:', [].customPop());


const sliceArray = [1, 2, 3, 4, 5].customSlice(undefined, -2);
const sliceArray2 = [1, 2, 3, 4, 5].customSlice(-2);
console.log('slice:', sliceArray);
console.log('slice:', sliceArray2);


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


const sortArray = [3, 4, 1, 10, 2, 7];
console.log('sort:', sortArray.customSort());


const keysObject = {
  js: 'test',
  jq: 'hello',
  css: 'world',
}
console.log('keys:', Object.customKeys(keysObject));


const strArray = ['asda', 'gerr', 'saaa'];
const str1 = 'gerr';
const str2 = 'ssq';
console.log('hasElems:',hasElems(str1, strArray));
console.log('hasElems:',hasElems(str2, strArray));

const numArray = [1, 23, 45, 21];
console.log('hasNum:',hasNum(1, numArray));
console.log('hasNum:',hasNum(2, numArray));

const numArray2 = [1, 23, 45, 45, 23, 21];
console.log('hasTwoEqualNumTogether:', hasTwoEqualNumTogether(45, numArray2));
console.log('hasTwoEqualNumTogether:', hasTwoEqualNumTogether(23, numArray2));

const randArray = [];
console.log('fillRandValue:', fillRandValue(randArray, 10, 15, 78));

const numArray3 = [4, -2, 5, 19, -130, 0, 10];
console.log('getMinMaxValues:', getMinMaxValues(numArray3));
