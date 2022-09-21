const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} === ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item in itemsToCount){
    //console.log(`${item}: ${itemsToCount[item]}`); 
    //-> output : {Jason: true ...}
    let count = 0;
    if(itemsToCount[item] === true){
      allItems.forEach(function (element){
        //console.log(element); -> outputs the elements in firstNames 
        if(element === item){
          count++;
        }
      })
    }
    //if the count is greater than 0 -> store the count in result[item] 
    if(count){
      result[item] = count;
      //console.log(result);
      //it outputs -> {Jason: 1, Fang: 2}
    }
  }
  return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);