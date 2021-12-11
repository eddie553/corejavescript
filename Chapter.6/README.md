# Chapter.6

## 프로토타입 : 생성자 함수의 프로퍼티로, 객체 내부에 메서드를 저장하고 있음. 인스턴스의 프로퍼티인 **proto**를 사용하여 이 메서드에 접근 가능하다.

### ex. 6-1

[Person.prototype]

Person의 prototype으로 getName 메서드를 새로 만든다.
생성자 Person으로 생성된 suzi의 **proto**는 Person.prototype을 참조한다.
suzi.**proto**.getName()의 this는 suzi.**proto** 이다.
(1) Person.prototype에는 \_name 프로퍼티가 존재하지 않으므로 undefined를 반환한다.
(2) Person.prototype의 \_name 프로퍼티에 'SUZI\_\_proto\_\_'를 할당하여 새로 만든다.
(3) **proto** 를 생략하여 생성자의 메서드를 호출, this는 suzi가 되어 'Suzi'를 반환한다.

### ex. 6-2

[prototype과 __proto__]

Constructor 함수의 구조 - 프로퍼티로 prototype을 가지고 있고, 선언해준 method1, property1을 확인할 수 있다.
생성자 Constructor로 만든 인스턴스의 디렉토리 구조 - **proto** 를 가지고 있으며 Constructor.protype과 동일하다.

### ex. 6-3

prototype 객체 내부에는 constructor 프로퍼티가 존재한다.
생성자 함수(자기 자신)를 참조한다. (인스턴스로부터 원형을 알 수 있는 수단이 됨)
