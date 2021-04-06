/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = String(n);
  const splittedStrN = strN.split('');
  const arrOfNumbers = [];
  for (let i = 0; i < splittedStrN.length; i++) {
    const cachDigit = splittedStrN[i];
    splittedStrN[i] = '';
    arrOfNumbers.push(Number(splittedStrN.join('')));
    splittedStrN[i] = cachDigit;
  }
  return Math.max(...arrOfNumbers);
}

module.exports = deleteDigit;
