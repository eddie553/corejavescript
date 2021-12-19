var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea()); // 12

var Square = function (width) {
  Rectangle.call(this, width, width);
};
Square.prototype = new Rectangle();

var sq = new Square(5);
console.log(sq.getArea()); // 25

console.dir(sq);
