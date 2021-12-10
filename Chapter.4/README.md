# Chapter.4 콜백 함수

## 콜백 함수 : 다른 코드의 인자로 넘겨주는 함수, 그 제어권도 함께 위임한 함수.

### ex. 4-1

[콜백 함수]

setInterval의 인자로 콜백 함수를 넣어줌.
300ms 마다 콜백 함수가 반복적으로 실행된다.

### ex. 4-2

[콜백 함수]

예제 4-1의 콜백 함수를 cbFunc에 할당하여 setInterval의 인자로 넘겨줌.
timer 변수에는 setInterval의 ID 값이 담긴다.
cbFunc의 제어권은 호출 주체인 setInterval에게 있다.

### ex. 4-3

[콜백 함수 - Array.prototype.map]

map메서드의 인자로 콜백함수를 넘겨줌.
메서드마다 콜백 함수의 manual이 존재한다.

- map
  Array.prototype.map(callback[, thisArg])
  callback: function(currentValue, index, array)

### ex. 4-4

[콜백 함수 - Array.prototype.map]

인자의 순서를 임의대로 바꾸어 사용한 예제.
인자의 순서를 임의로 바꾸면 안된다. 정해진 manual대로 인자 순서를 유의하자.

### ex. 4-5

[콜백 함수 예제 - Array.prototype.map 구현]
map 메서드의 구성을 이해하기 위한 예제.
