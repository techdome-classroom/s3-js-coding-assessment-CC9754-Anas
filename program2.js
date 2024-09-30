/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNum = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let integeralValue = 0;
    let i = 0;
    for(i < s.length){
      if(romanNum[s[i]] < romanNum[s[i + 1]]){
        integeralValue += romanNum[s[i + 1]] - romanNum[s[i]];
        i += 2;
      }
    }
};


module.exports={romanToInt}