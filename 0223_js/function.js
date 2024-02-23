console.log("connected!");

// function() -> parameter = argument = 매개변수 = 인자
// 함수 : 특정 작업 수행을 위해 독립적으로 설계된 코드 집합 -> 사용 방법 : 함수 정의 후 호출
// 함수 선언 구조 - keyword: function, name: 함수 이름(camelCase로 작성), parameter, body(함수 내부 코드, =scope)
/* 함수 선언 방식 - 1. 힘수 선언문 : function name() {} -> 유일하게 함수 선언 전 호출 가능
                2. 함수 표현식 : const name = function() {}
                 -> js는 함수가 값이기 때문에 변수 생성 후 함수 저장하는 방식 가능
                3. 화살표 함수 : const name = () => {}
*/

// 함수 선언문(명시적 함수)
function message() {
  let userName = prompt("input your name");
  let userPhoneNum = prompt("input your phone number");
  return "당신의 이름: " + userName + "\n" + "당신의 핸드폰: " + userPhoneNum;
}
alert(message()); // 함수 호출

// 함수 표현식(익명 함수)
let helloWorld = function () {
  console.log("helloWorld");
};

// 화살표 함수(익명 함수)
let helloWorld2 = () => {
  console.log("helloWorld");
};

// return : 함수의 반환값(함수 최종 결과값 저장 및 보관을 위한 키워드 - 결과값 반환 후 함수 실행 중단)
function sum() {
  let num1 = Number(prompt("input one number"));
  let num2 = Number(prompt("input another number"));
  return num1 + num2;
}
alert(sum());

// 사칙연산 중 2개의 숫자를 받아 -하는 함수
function minus(num1, num2) {
  return num1 - num2; // 3.141592 + (-3) = 3.14159200000000016
}
let result = minus(10, 5);
console.log(result);

// 알림창에 사용자 이름을 띄우는 함수
function hello(name) {
  alert(`hello ${name}`);
}
const userName = "kermit";
hello(userName);
