const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  let tempArr = [];
  for(i = 1; i < arr.length; i++){
    tempArr.push(arr[i]);
  }
  return tempArr;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString()); // => will always fail!