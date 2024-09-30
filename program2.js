/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNum = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let integeralValue = 0;
    for(let i = 0; i < s.length; i++){
      if(romanNum[s[i]] < romanNumerals[s[i + 1]]){
        integeralValue += 
      }
    }
};


module.exports={romanToInt}