/* TASK 1 */
const getPow = (num, exp) => {
  if (exp === 1) {
    return num;
  }

  const pow = (pow, exp) => num * pow(num, exp - 1);
  return exp > 0 ? pow(getPow, exp) : (1 / pow(getPow, Math.abs(exp)));
}

console.log(getPow(2, -3));


/* TASK 2 */
const getPairBrackets = function (count) {
  const baskets = '()';

  if (count <= 1) {
    return baskets;
  }
  return baskets.substring(0, baskets.length / 2) + getPairBrackets(count - 1) + baskets.substring(baskets.length / 2, baskets.length);
}

console.log(getPairBrackets(-1));
console.log(getPairBrackets(3));