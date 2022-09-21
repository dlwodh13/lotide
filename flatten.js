const flatten = function(array) {
  let arrayTwo = [];
  //console.log(array[2]);
  for (let item of array){
    if(Array.isArray(item)){
      for(let j = 0; j < item.length; j++){
        arrayTwo.push(item[j]);
      }
    }else {
      arrayTwo.push(item);
    }
  }
  return arrayTwo;
};

//testing output
//flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
