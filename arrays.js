 var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
    
       
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
    
function destructivelyAddElementToBeginningOfArray(array, element) {
   return array.unshift();
}

function addElementToEndOfArray(array, element) {
  var arr = newArray();
  return newArray([...array, element]);
}

function destructivelyAddelementToEndOfArray(array, element) {
  var arr = newArray();
  return newArray(array.pop(element));
}