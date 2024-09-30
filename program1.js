/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
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
  
};

module.exports = { isValid };
