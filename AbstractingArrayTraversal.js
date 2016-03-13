var array = [1 ,2, 3];

for (var i == 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

function logEach(array) {
  for (var i = 0; i < array.length; i++)
  console.log(array[i]);
}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
  action(array[i]);
}
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// -> Wampeter
// -> Foma
// -> Granfalloon
