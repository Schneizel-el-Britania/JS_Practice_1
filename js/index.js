/* TASK 1 */
const getVowelsCount = function (str) {
  const vowels = ['a', 'u', 'e', 'i', 'o'];
  return [...str].reduce((res, char) => res + vowels.some((item) => char.toLowerCase().includes(item)), 0);
}

console.log(getVowelsCount('aafUfksOEEE'));