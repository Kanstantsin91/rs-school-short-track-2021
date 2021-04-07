/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const minS = Math.min(s1.length, s2.length) === s1.length ? s1.split('') : s2.split('');
  const maxS = Math.max(s1.length, s2.length) === s2.length ? s2.split('') : s1.split('');
  for (let i = 0; i < minS.length; i++) {
    if (maxS.includes(minS[i])) {
      maxS[maxS.indexOf(minS[i])] = '';
      minS[i] = '';
    }
  }
  return minS.filter((el) => el === '').length;
}

module.exports = getCommonCharacterCount;
