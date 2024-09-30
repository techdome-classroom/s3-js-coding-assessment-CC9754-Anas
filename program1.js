/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let brackets = 0;
  let curly = 0;
  let bigBrackets = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(')brackets += 1;
    else if(s[i] === '{')curly += 1;
    else if(s[i] === '[')bigBrackets += 1;
    else if(s[i])
  }
};

module.exports = { isValid };
