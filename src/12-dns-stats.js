/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNSStat = {};

  for (let i = 0; i < domains.length; i++) {
    const address = domains[i].split('.').reverse();
    let domain = '';
    for (let j = 0; j < address.length; j++) {
      domain += `.${address[j]}`;
      DNSStat[domain] = typeof DNSStat[domain] !== 'undefined' ? DNSStat[domain] + 1 : 1;
    }
  }
  return DNSStat;
}

module.exports = getDNSStats;
