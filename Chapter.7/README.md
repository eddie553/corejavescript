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
