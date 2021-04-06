/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const splittedStr = str.split('');
  let encodedStr = '';
  let counter = 1;
  for (let i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i] !== splittedStr[i + 1]) {
      if (counter === 1) {
        encodedStr += splittedStr[i];
      } else encodedStr += counter + splittedStr[i];
      counter = 1;
    } else {
      counter++;
    }
  }
  return encodedStr;
}

module.exports = encodeLine;
