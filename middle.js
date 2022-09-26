//middle.js main function
const middle = function(arr){
  let arrLen = arr.length;
  let tempArr = [];
  if(arrLen > 2) { 
    if(arrLen % 2 === 0){
      tempArr.push(arr[(arrLen / 2) - 1]);
      tempArr.push(arr[(arrLen / 2)]);
    } else {
      tempArr.push(arr[(arrLen - 1) / 2]);
    }
  }
  return tempArr;
};

module.exports = middle;