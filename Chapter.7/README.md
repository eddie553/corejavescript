# Chapter.7

## ES5에서 클래스 구현하기, ES6 클래스 문법

### ex. 7-1

[스태틱 메서드, 프로토타입 메서드]

ES5에서는 클래스 문법이 없기 때문에 프로토타입 체인을 이용하여 클래스를 구현하였음.
ES6에서는 클래스 문법을 지원한다.

- 생성자 Rectangle
  - static properties, methods
  - prototype properties, methods
- new 생성자로 만든 인스턴스
  - \_\_proto\_\_ 로 생성자 prototype에 있는 메서드를 사용 가능하다

### ex. 7-2

[스태틱 메서드, 프로토타입 메서드 (2)]

- 생성자 Rectangle
  - static properties, methods
  - prototype properties, methods
- new 생성자로 만든 인스턴스
  - \_\_proto\_\_ 로 생성자 prototype에 있는 메서드를 사용 가능하다

### ex. 7-3

[length 프로퍼티를 삭제한 경우] - 불완전한 클래스 구현

delete g.length로 인스턴스의 length 프로퍼티를 강제로 삭제한다.
Array의 push 메서드는 배열의 length를 검사한 후, 마지막 요소로 배열을 추가한다.
인스턴스에 length 프로퍼티가 없으므로 인스턴스의 \_\_proto\_\_인 Grade.prototype의 length를 검사하므로
0번째 요소로 70을 넣고, length 프로퍼티는 여전히 존재하지 않는 배열이 된다.
출력되는 length는 Grade.prototype(빈배열)의 length이다.

### ex. 7-4

[요소가 있는 배열을 prototype에 매칭한 경우] - 불완전한 클래스 구현

7-3와 마찬가지로 불완전한 클래스 구현
.prototype(클래스)에 구체적인 값이 없으면 해결.

### ex. 7-5

[Recatngle, Square 클래스] - 클래스 구현해보기

- Rectangle

  - .prototype
    - getArea(){}
  - constructor

- Square

  - .prototype
    - getArea(){}
    - \_\_proto\_\_
    - constructor

- instance sq
  - \_\_proto\_\_ -> Square.prototype

Rectangle의 자식 클래스인 Square가 getArea 메서드를 상속받아 쓰려면?

### ex. 7-6

[Recatngle, Square 클래스] - Square 클래스 변형

Rectangle의 하위 클래스로 삼을 수 있도록 Square 생성자를 수정.

### ex. 7-7

[Recatngle, Square 클래스] - Rectangle을 상속하는 Square 클래스

Square.prototype에 Rectangle의 인스턴스([undefined,undefined])를 부여함.
Square 생성자를 실행하면, Square 생성자 함수 내의 Rectangle.call(this,width,width)에 의해
생성된 인스턴스의 \_\_proto\_\_ -> Rectangle.prototype 으로 Rectangle 클래스를 상속할 수 있다.

불완전한 상속 - 문제

1. Square 생성자로 생성한 인스턴스 sq의 constructor는 Square가 아니라 Recatngle이 됨.
2. Square.prototype으로 구체적인 데이터가 존재.

### ex. 7-8

[ 클래스 상속 및 추상화 방법 (1) - 인스턴스 생성 후 프로퍼티 제거 ]

extendClass1 함수 :
인스턴스 생성 후 SubClass의 프로퍼티들을 모두 지우고,
SubMethods에 들어갈 메서드들이 정의된 객체를 받아 SubClass의 prototype에 정리 후 freeze.
sq의 \_\_proto\_\_ -> SubClass.prototype(SubMethods)의 \_\_proto\_\_ -> SuperClass.prototype

### ex. 7-9

[ 클래스 상속 및 추상화 방법 (2) - 빈 함수를 활용(클로저 변수) ]

extendClass2 함수 :
빈 함수 Bridge 를 생성하여 return하는 함수에서 Bridge 클로저 변수를 사용한다.
Bridge의 prototype은 Rectangle.prototype을 가르킨다.
sq 의 \_\_proto\_\_ -> Square.prototype(SubMethods)의 \_\_proto\_\_ -> Bridge.prototype

### ex. 7-10

[ 클래스 상속 및 추상화 방법 (3) - Object.create 활용 ]

Object.create로 생성하는 객체의 \_\_proto\_\_를 Rectangle.prototype을 가르키도록 지정해주고
Square.prototype에 할당한다.
sq 의 \_\_proto\_\_ -> Square.prototype(SubMethods)의 \_\_proto\_\_ -> Rectangle.prototype

### ex. 7-11

7-8,7-9, 7-10은 모두 클래스가 구체적인 데이터를 지니지 않게 하지만 constructor를 복구하지 않은 상태이다.

constructor를 복구하기 위해서는 자식 클래스.prototype.constuctor 프로퍼티가 자식 클래스를 가르키도록 할당하면 된다.

[클래스 상속 및 추상화 방법 - 완성본(1) - 인스턴스 생성 후 프로퍼티 제거]
예제 7-8를 수정하여 constuctor를 복구한 예제.

### ex. 7-12

[클래스 상속 및 추상화 방법 - 완성본(2) - 빈 함수를 활용]
예제 7-9를 수정하여 constuctor를 복구한 예제.
