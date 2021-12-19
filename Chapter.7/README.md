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
