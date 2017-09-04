var input = process.argv[2];

function getRandomInt() {
  return Math.floor(Math.random() * (6)) + 1;
}

if (input > 0) {
  var output = 'Rolled ' + input + ' dice: ' + getRandomInt();
  for (var i = 1; i < input; i++) {
    output = output + ", " + getRandomInt();
  }
  console.log(output)
} else {
  console.log("Please enter a number greater than 0");
}
