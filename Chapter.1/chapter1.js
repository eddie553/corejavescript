var a;
console.log(a); // (1) undefined. 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 프로퍼티에 접근
console.log(b); // c.f) ReferenceError: b is not defined

var func = function () {};
var c = func(); // (3) 반환(return)값이 없으면 undefined를 반환한 것으로 간주.
console.log(c); // undefined
