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

[constructor 프로퍼티]

prototype 객체 내부에는 constructor 프로퍼티가 존재한다.
생성자 함수(자기 자신)를 참조한다. (인스턴스로부터 원형을 알 수 있는 수단이 됨)

### ex. 6-4

[constructor 프로퍼티 변경하기]

constructor는 기본형 리터럴 변수(number, string, boolean)를 제외하고 값을 바꿀 수 있다.
constructor를 변경하더라도, 참조하는 대상이 변경되었을 뿐, 이미 만들어진 인스턴스의 원형이 바뀌거나 데이터 타입이 변하지 않는다.(false 결과)

### ex. 6-5

[다양한 constructor 접근 방법]

1. [Constructor]
2. [instance].**proto**.constructor
3. [instance].constructor
4. Object.getPrototypeOf([instance]).constructor
5. [Constructor].prototype.constructor

[prototype 객체 접근 방법]

1. [Constructor].prototype
2. [instance].**proto**
3. [instance]
4. Object.getPrototypeOf([instance])

### ex. 6-6

[메서드 오버라이드]

(프로토타입 체이닝)

- 인스턴스와 prototype가 동일한 이름의 프로퍼티 또는 메서드가 있을 때
  1. 인스턴스가 자신의 프로퍼티 또는 메서드를 가지고 있는지 검색 (iu 안 getName 존재 검색) -> 있으면 실행
  2. 없으면 -> prototype에 정의된 프로퍼티나 메서드를 검색 (Person.prototype 안 getName 존재 검색)

(A) 와의 결과처럼 prototype 안의 메서드를 실행 시 call/apply로 this를 지정해줄 수 있다.

### ex. 6-7

[배열에서 배열 메서드 및 객체 메서드 실행]

(**proto**) 생략 - Array.prototype 안의 push 메서드 사용
(**proto**)(**proto**) 생략 - prototype의 **proto** 는 object 데이터 타입이므로 Object.prototype을 hasOwnProperty()를 참조할 수 있다.

### ex. 6-8

[메서드 오버라이드와 프로토타입 체이닝]

프로토타입 체인 : **proto** 프로퍼티 내부에 다시 **proto** 프로퍼티가 연쇄적으로 이어진 것
프로토타입 체이닝 : 프로토타입 체인을 따라가며 검색하는 것

(1) : arr.**proto**.toString() = Array.prototype.toString()
(2) : arr 안의 메서드 toString()을 실행.

### ex. 6-9

[Object.prototype에 추가한 메서드에의 접근]

Object.prototype에 getEntries라는 메서드를 새로 생성해줌.
getEntries : this의 [key#, value#]를 요소로 가지는 배열로 만들어주는 사용자가 정의한 메서드

datum[1].getEntries() 에서 datum[1]이 this가 된다.

JS에서 모든 **proto** 는 object 객체이므로, 프로토타입 체인의 최상단에 object.prototype.getEntries를 참조하게 된다.

object, string은 첫 번째 **proto**가 hasOwnProperty(해당 객체 자체의 프로퍼티를 가지고 있는지 true/false를 반환하는 메서드)를 가지므로 if문을 실행시켜 원하는 배열이 반환된다.

- object의 인스턴스에만 적용되는 함수를 만드려면?
  static method를 활용한다. (ex. freeze())
  즉, Object.prototype.getEnries가 아닌 Object.getEntries로 static 메서드로 정의하자.

* Object.create의 인자로 prototype을 지정해줄 수 있다.
  Object.create(null)은 **proto** 가 null 이 된다.

### ex. 6-10

[다중 프로토타입 체인]

유사배열객체(array-like-object)를 call/apply를 쓰지않고 인스턴스에서 배열 메서드를 직접 사용하기.
(g.**proto**가 배열의 인스턴스를 가르키게 하기)

Grade 생성자 함수의 prototype에 [] 빈 배열을 새로 할당하는 것으로 상위 프로토타입 체인에 의해 배열 메서드를 사용할 수 있게 된다.
