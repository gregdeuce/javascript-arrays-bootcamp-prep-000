 var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
    
       
function addElementToBeginningOfArray(array, element) {
  [element, ...array];
  return array;
}
    
function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   return array;
}

function addElementToEndOfArray(array, element) {
  
  return newArray([...array, element]);
}

function destructivelyAddelementToEndOfArray(array, element) {
  
  return newArray(array.pop(element));
}