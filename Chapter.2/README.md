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
