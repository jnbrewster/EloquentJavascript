var array = [1, 2, 3];

for (var i = 0; i <array.length; i++) {
  var current = array[i];
  console.log(current);
}

// abstract for loop into a function
function logEach(array) {
  for (var i = 0; i < array.length; i++)
  console.log(array[i]);
}

// change function; pass action as a function value
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
  action(array[i]);
}

forEach(["Wampeter", "Foma",
"Granfalloon"], console.log);

// -> Wampeter
// -> Foma
// -> Granfalloon

// Create a function value on the spot
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);
// -> 15
