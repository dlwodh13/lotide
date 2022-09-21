const eqArrays = function(arr1, arr2) {
  //checking whether both array have same array length
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      //if the element does not equal for one of the index, return false
      if (arr1[i] !== arr2[i]) {
        //console.log("false");
        return false;
      }
    }
    //return true since all the element has been checked
    //console.log("true");
    return true;
  }
};
