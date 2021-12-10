var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) {
  console.log(v, i);
}); // undefined 0 / 1 1
arr2.forEach(function (v, i) {
  console.log(v, i);
}); // 1 1

arr1.map(function (v, i) {
  return v + i;
}); // [NaN, 2]
arr2.map(function (v, i) {
  return v + i;
}); // [empty, 2]

arr1.filter(function (v) {
  return !v;
}); // [undefined]
arr2.filter(function (v) {
  return !v;
}); // []

arr1.reduce(function (p, c, i) {
  return p + c + i;
}, ""); // undefined011
arr2.reduce(function (p, c, i) {
  return p + c + i;
}, ""); // 11
