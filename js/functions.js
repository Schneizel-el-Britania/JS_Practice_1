/* TASK 1 */
const getPow = (num, exp) => {
  if (exp === 1) {
    return num;
  }

  const pow = (pow, exp) => num * pow(num, exp - 1);
  return exp > 0 ? pow(getPow, exp) : (1 / pow(getPow, Math.abs(exp)));
}

console.log(getPow(2, -3));
