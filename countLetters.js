const countLetters = function(str) {
  const result = {};
  str = str.replace(/ /g, '');
  for(let char of str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(char === str[i] && char !== ' '){
        count++;
      }
    }
    result[char] = count; 
  }
  //console.log(result);
  return result;
};

module.exports = countLetters;
