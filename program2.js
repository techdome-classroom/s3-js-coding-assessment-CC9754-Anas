/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let intValue = 0;
  let i = 0;
  while (i < s.length) {
    if (romanNum[s[i]] < romanNum[s[i + 1]]) {
      intValue += romanNum[s[i + 1]] - romanNum[s[i]];
      i += 2;
    } else {
      intValue += romanNum[s[i]];
      i++;
    }
  }
  return intValue;
};

module.exports = { romanToInt };
