var arr = [1, 2];

Array.prototype.toString.call(arr); // 1,2
console.log(Array.prototype.toString.call(arr));

Object.prototype.toString.call(arr); // [object Array]
console.log(Object.prototype.toString.call(arr));

arr.toString(); // (1) 1,2
console.log(arr.toString());

arr.toString = function () {
  return this.join("_");
};
arr.toString(); // (2) 1_2
console.log(arr.toString());
