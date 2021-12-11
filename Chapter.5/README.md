# Chapter.5

## 클로저 : 어떤 함수에서 선언한 변수를 참조하는 내부함수에서만 발생하는 현상

### ex. 5-1

[외부 함수의 변수를 참조하는 내부 함수(1)]

inner 내부 함수에서 a를 선언하지 않았기 때문에 외부 함수의 변수 a를 찾는다.
이 때 그 데이터 값을 가르키는 클로저가 내부 함수가 선언될 때 함께 생성된다.

- 모든 자바스크립트 함수는 선언될 시 클로저가 형성되며 클로저 환경을 기억한다.
- 외부 함수가 콜 스택에서 사라져도 클로저는 사라지지 않는다.

### ex. 5-2

[외부 함수의 변수를 참조하는 내부 함수(2)]

예제 5-1과 달리 외부 함수 outer를 수행시킨 결과를 outer2에 할당한다.
즉, 결과값인 데이터 영역의 2를 가르키는 주소를 할당한 것.

### ex. 5-3

[외부 함수의 변수를 참조하는 내부 함수(3)]

예제 5-1, 5-2와 달리 outer의 return이 inner 함수의 주소값이다.
outer2()의 수행 시점에서 outer는 콜 스택에서 사라진 상태인데도,
변수 영역의 콜 스택에서 outer가 사라져도 데이터 영역의 클로저는 사라지지 않으므로
inner 함수를 실행한 결과와 같다.