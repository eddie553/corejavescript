console.log(sum(3, 4)); // Uncaught Type Error: sum is not a function

var sum = function (x, y) {
  return x + y;
};

var a = sum(1, 2);

var sum = function (x, y) {
  return x + " + " + y + " = " + (x + y);
};

var c = sum(1, 2);
console.log(c);
