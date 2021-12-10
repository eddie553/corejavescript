var a = 10;
var b = a;
var obj1 = { c: 10, d: "ddd" };
var obj2 = obj1;

b = 15;
obj2.c = 20;
console.log(obj2.c);
