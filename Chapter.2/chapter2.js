console.log(sum(3, 4));

function sum(x, y) {
  return x + y;
}

var a = sum(1, 2);

function sum(x, y) {
  return x + " + " + y + " = " + (x + y);
}

var c = sum(1, 2);
console.log(c);
