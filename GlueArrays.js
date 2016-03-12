//Glue arrays
//How to both concat and slice
//Takes an array and an index and returns a new array that is a copy of the original array with the element at the given index removed.

function remove(array, index) {
  return array.slice(0, index)
  .contcat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2]));
// -> ["a", "b", "d", "e"]
