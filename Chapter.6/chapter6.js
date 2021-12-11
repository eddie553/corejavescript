var Person = function (name) {
  this._name = name;
};
Person.prototype.getName = function () {
  return this._name;
};

var suzi = new Person("Suzi");
console.log(suzi.__proto__.getName()); // (1) undefined

suzi.__proto__._name = "SUZI__proto__";
console.log(suzi.__proto__.getName()); // (2) SUZI__proto__

console.log(suzi.getName()); // (3) Suzi
