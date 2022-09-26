const eqArrays = function(arr1, arr2) {
  //checking whether both array have same array length
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.forEach((element, index) => {
    if (Array.isArray(element) && Array.isArray(arr2[index])) {
      if (!eqArrays(element,arr2[index])) {
        return false;
      }
    } else if (element !== arr2[index]) {
      return false;
    }
  }); 
  return true;
}

module.exports = eqArrays;