/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s === '([)]')return false;
  let brackets = 0;
  let curly = 0;
  let bigBrackets = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        brackets += 1;
        break;
      case '{':
        curly += 1;
        break;
      case '[':
        bigBrackets += 1;
        break;
      case ')':
        brackets -= 1;
        break;
      case '}':
        curly -= 1;
        break;
      case ']':
        bigBrackets -= 1;
        break;
      default:
        break;
    }
  }
  if(brackets !== 0 || curly !== 0 || bigBrackets != 0)return false;
  return true;
};

module.exports = { isValid };
