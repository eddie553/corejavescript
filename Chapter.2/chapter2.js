var sum = function sum(a, b) {
  // 함수 선언문은 전체를 호이스팅합니다.
  return a + b;
};
var multiply; // 변수는 선언부만 끌어올립니다.
console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function (a, b) {
  // 변수의 할당부는 원래 자리에 남겨둡니다.
  return a * b;
};
