# Chapter.2

## 실행 컨텍스트

### ex. 2-1

실행 컨텍스트 : 실행할 코드에 제공할 환경 정보들을 모아놓은 객체

콜 스택 : 코드 실행 시 필요한 실행 컨텍스트를 구성하여 쌓아놓은 스택

[콜 스택] - 예제 2-1
전역 컨텍스트 -> outer -> inner 순으로 스택에 쌓이고 반대 순서로 스택에서 빠져나간다.

- 실행 컨텍스트 구성

  - VariableEnvironment

    - environmentRecord(snapshot)
    - outerEnvironmentReference(snapshot)

  - LexicalEnvironment

    - environmentRecord
    - outerEnvironmentReference

  - ThisBinding

### ex. 2-2

[호이스팅]

자바스크립트 실행 이해하기

1. declaration 찾기 = 호이스팅
   선언은 function, identifier, 등을 순서대로 수집한다.
2. expression = 실행
   할당, 함수 실행 등의 코드를 실행한다.

### ex. 2-3

[호이스팅]
2-2 예제를 매개변수를 변수 선언/할당과 같다고 간주해서 변환한 예제
호이스팅에서는 변수명만 끌어올리고 할당 과정은 하지 않는다.

### ex. 2-4

[호이스팅]
2-2 예제의 호이스팅을 마친 상태를 이해하기 쉽게 코드 순서대로 쓴 예제

### ex. 2-5

[호이스팅]
호이스팅을 먼저 한 후, 할당이 되는 것을 유의하여 결과를 보자.

### ex. 2-6

[호이스팅]
2-5 예제의 호이스팅을 마친 상태를 이해하기 쉽게 코드 순서대로 쓴 예제
