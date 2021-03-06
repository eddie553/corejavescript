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

### ex. 4-6

[콜백 함수 내부에서의 this]

첫 번째, 두 번째 결과는 전역 객체 결과.

- 세 번째 결과  
  call 메서드의 첫 번째 인자에 addEventListener메서드의 this를 그대로 넘기도록 정의되어있음.
  콜백 함수 내부에서의 this가 addEventListener를 호출한 주체인 HTML엘리먼트를 가르킴.

### ex. 4-7

[메서드를 콜백 함수로 전달한 경우]

- 점 호출법이 있으면 메서드로 호출
- forEach함수의 콜백 함수로 메서드를 전달했을 때, 함수로 호출한 것 ( 별도의 this바인딩이 없으면전 this는 역객체를 가르킴)

### ex. 4-8

[콜백 함수 내부의 this에 다른 값을 바인딩하기 (1)]

전통적인 방식 (번거로움)
콜백 함수 안 this를 할당해주는 variable self를 선언.

### ex. 4-9

[콜백 함수 내부에서 this를 사용하지 않은 경우]

예제 4-8에서 this를 사용하지 않았을 때의 결과.

### ex. 4-10

[예제 4-8의 func 함수 재활용]

call 메서드를 사용하여 this를 obj3로 지정해준다.

### ex. 4-11

[콜백 함수 내부의 this에 다른 값을 바인딩하기 (2) - bind 메서드 활용]

bind의 인자를 해당 함수의 this롤 지정하여 새로운 function을 리턴해준다.

### ex. 4-12

[콜백 지옥 예시]

0.5초 주기마다 커피 목록을 수집하고 출력하는 코드.
콜백 지옥.

### ex. 4-13

[콜백 지옥 해결 - 기명함수로 변환]

기명함수로 전환하여, 위에서부터 아래로부터 순서대로 수행.
일회성 함수를 전부 변수에 할당하는 문제.

### ex. 4-14

[비동기 작업의 동기적 표현(1) - Promise(1)]

new Promise의 인자로 넘겨준 콜백 함수는 호출할 때 바로 실행되지만,
그 내부에 resolve 또는 reject 함수를 호출하는 구문이 있을 경우 -
둘 중 하나가 실행되기 전까지는 then 또는 catch 구문으로 넘어가지 않는다.
비동기적 작업이 완료될 때 - resolve 또는 reject를 호출하는 방식

### ex. 4-15

[비동기 작업의 동기적 표현(1) - Promise(2)]

예제 4-14의 반복 내용을 함수화하여 짧게 표현.

### ex. 4-16

[비동기 작업의 동기적 표현(2) - Generator]

Generator 함수를 실행하면 Iterator가 반환되는데,
이 안의 next 메서드를 호출하면 Generator 함수 내부에서 가장 먼저 (1) 등장하는 yield에서 함수의 실행을 멈춘다.
(2) 이후 다시 next 메서드를 호출하여 멈췄던 부분부터 다시 시작.
(1),(2)의 반복.

### ex. 4-17

[비동기 작업의 동기적 표현(3) - Promise + Async/await]

async : 비동기 작업을 수행하고자 하는 함수 앞 표기
await : 함수 내부에서 비동기 작업이 필요한 위치마다 표기, 뒤의 내용을 Promise로 자동 전환, 해당 내용이 resolve된 이후 다음으로 진행.
