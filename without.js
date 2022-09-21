const without = function(items, itemsToBeRemoved) {
  return items.filter(element => !itemsToBeRemoved.includes(element));
};