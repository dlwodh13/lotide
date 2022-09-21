const tail = function(arr) {
  let tempArr = [];
  for(i = 1; i < arr.length; i++){
    tempArr.push(arr[i]);
  }
  return tempArr;
};