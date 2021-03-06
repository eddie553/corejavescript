# Chapter.1

## JavaScript의 데이터 타입, 메모리에 변수 선언과 데이터 할당이 되는 과정

### ex. 1-1

자바스크립트에서 변수 a 선언(declaration) 하기

### ex. 1-2

변수 a 선언(declaration)과 할당(assignment)을 한 문장으로 동시에 하기

### ex. 1-3

[자바스크립트가 메모리를 사용하는 방법] - [불변값]
데이터의 type에 따라 immutability가 다르다.

- primitive type 데이터 : 불변
  새로운 값을 할당할 때 데이터의 영역에서 값이 이미 존재하는지 찾고, 없으면 데이터 공간을 만들어 저장한다.
  데이터 영역에서 할당하려는 값이 이미 존재하면 그 주소를 재활용한다.
  - 예제 사용 : string, number
    이미 선언과 동시에 'abc'값이 할당된 a에 새로운 값을 a+'def'를 할당하면, 데이터 영역에서 'abcdef'이 존재하는지 찾고 존재하지않으면 새로운 데이터 공간을 만들어 저장한다.
    이전의 'abc' string type의 데이터 영역은 지워지지 않는다.

### ex. 1-4

[자바스크립트가 메모리를 사용하는 방법] - [가변값]

- reference type 데이터 : 가변

* 예제 사용 : object
  obj1 은 reference type이므로 주소값을 가지고 있으며,
  obj1이 가르키는 주소의 변수 영역에는 프로퍼티에 해당하는 데이터가 존재한다.
  key에 해당하는 데이터는 데이터 영역에 존재하는 number, string 값의 주소를 가지고 있다.

### ex. 1-5

참조형 데이터의 프로퍼티 재할당

1-4 예제에 이어서 obj1 객체의 프로퍼티 a에 값을 재할당하면,
데이터 영역에 재할당한 값이 존재하는지 검색하고 없다면 새로운 데이터 공간에 값을 저장하고
a 프로퍼티가 가르키는 데이터 영역의 주소가 그 데이터 공간의 주소로 바뀐다.
= 즉, 프로퍼티의 재할당 시에는 obj1의 참조형 데이터는 바뀌지 않았다.

### ex. 1-6

중첩된 참조형 데이터(객체)의 프로퍼티 할당
obj 객체 안에 arr라는 array 데이터 타입의 프로퍼티가 존재하는 중첩된 형태.
arr의 중첩된 데이터를 재할당하면(obj.arr='str')
obj의 참조형 데이터는 변하지 않지만 arr의 참조형 데이터는 더 이상 사용하지 않게 되고 garbage collection이 된다.

### ex. 1-7

- 기본형 데이터의 변수 복사
  복사 시 데이터 영역에 존재하는 기본형 데이터(primitive type)을 가르키는 주소값을 가진다.

- 참조형 데이터의 변수 복사
  복사 시 참조형 데이터를 가지는 주소값을 가진다. 참조형 데이터는 프로퍼티에 해당되는 데이터 영역을 가르킨다.

### ex. 1-8

[변수 복사 이후 값 변경 결과 비교] - 프로퍼티 변경 시

- 기본형 데이터의 변수 복사
  값 변경 시 primitive type이기 떄문에 데이터 영역이 불변, 새로운 데이터 영역에 저장되고 그 주소를 가르킨다.

- 참조형 데이터의 변수 복사
  프로퍼티를 변경할 경우, object 자체는 가변이 된다.

### ex. 1-9

[변수 복사 이후 값 변경 결과 비교] - 객체 자체를 변경했을 때

- 기본형 데이터의 변수 복사
  값 변경 시 primitive type이기 떄문에 데이터 영역이 불변, 새로운 데이터 영역에 저장되고 그 주소를 가르킨다.

- 참조형 데이터의 변수 복사 [기존의 object의 불변성 유지하기]
  새로운 object를 만들어 할당해준다. (기존 object의 수정X)

### ex. 1-10

[객체의 가변성에 따른 문제점]

참조형 데이터를 함수에서 return하게 되면 기존의 참조형 데이터가 가변되는 문제가 생긴다.
이전의 값을 알아야하는 sw가 많으므로 객체의 가변성은 좋지 않다.

### ex. 1-11

[불변 객체를 만드는 방법]

함수에서 새로운 객체를 만들어 return해준다.

### ex. 1-12

[얕은 복사]

for in 문법을 사용
result 객체에 target 객체의 프로퍼티를 복사해서 새로운 객체를 return한다.

### ex. 1-13

[얕은 복사 예제]

함수를 이용하여 새로 만든 객체와 기존의 객체가 다른 것으로 객체의 불변성을 유지할 수 있다.

### ex. 1-14

[중첩된 객체에 대한 얕은 복사의 문제]

얕은 복사 시, 중첩된 객체 안의 프로퍼티는 얕은 복사로 생성된 객체와 기존의 객체가 같은 참조형 데이터를 가진다.(같은 데이터를 가르키는 주소를 가진다)
중첩된 객체의 프로퍼티를 변경 시 불변성이 유지되지 않는 문제점이 있다.

### ex. 1-15

[깊은 복사]

기본형 데이터는 그대로 복사하면 되지만,
참조형 데이터는 다시 그 내부의 프로퍼티들을 복사해야하므로 함수 내 재귀적 수행이 필요하다.

### ex. 1-16

[깊은 복사]

내부 프로퍼티들을 순회하며 깊은 복사 함수를 재귀적으로 호출한다.
얕은 복사의 문제점을 해결할 수 있다.

### ex. 1-17

[깊은 복사 결과 확인]

### ex. 1-18

[간단한 깊은 복사]

JSON 문법으로 문자열로 전환했다가 다시 JSON객체로 바꾸는 것으로 깊은 복사를 수행할 수 있다.
**proto**, getter/setter 같이 JSON으로 변경할 수 없는 프로퍼티는 무시하므로 순수한 정보만 다룰 때 사용

### ex. 1-19

[자동으로 자바스크립트 엔진에서 undefined를 부여하는 3가지 경우]

1. 값을 대입하지 않은 변수에 접근
2. 존재하지 않는 프로퍼티에 접근
3. retrun 값이 없으면 undefined 를 return

### ex. 1-20

[undefined와 배열]

빈 배열과 undefined를 요소로 갖는 배열은 출력 결과가 다르다.

### ex. 1-21

[undefined와 배열]

undefined를 요소로 갖는 배열은 값이 없는 것이 아닌 존재 요소로 취급하여 array 메서드의 반복문을 수행한다.
반면 빈 요소는 배열 반복문을 수행하지 않는다.

### ex. 1-22

[undefined와 null의 비교]

undefined는 자바스크립트 엔진이 반환한느 경우에만 사용하도록 하고,
사용자가 값을 없음을 명시할 때는 null을 사용하도록 한다.
null의 typeof는 object이므로 유의한다.
( null == undefined ) = true
( null === undefined ) = false

### 할당 법칙

identifer (식별자, 변수) = data (데이터);

### identifer의 종류

- identifer
  - constant (성질 : unchangable )
  - variable (성질 : changable )

### data의 type

- data
  - Primitive type (성질 : immutable )
    - Number
    - String
    - Boolean
    - null
    - undefiened
    - Symbol
  - Reference type (성질 : mutable )
    - Object-Array
    - Function
    - Date
    - etc...
