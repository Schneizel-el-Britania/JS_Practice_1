/**
 * Custom keys method
 * @returns array[]
 */
const customKeys = function (obj) {
  const keys = {};
  let i = 0;
  for (let key in obj) {
    keys[i++] = key;
  }
  return keys;
}
Object.__proto__.customKeys = customKeys;