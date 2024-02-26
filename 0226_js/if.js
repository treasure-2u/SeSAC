console.log("connected!");

// 조건문 : 어떤 조건(=분기)에 따라 나눠진 논리 구조가 true 값이면 해당 코드 블럭을 실행(비교식)
// if문 : 구조 -> if(조건) {조건이 참일 경우 실행될 코드} (false인 경우 코드 블럭 실행 X)

/*
let num = Number(prompt("10보다 큰 수를 입력하십시오: "));
if (num > 10) {
  console.log(num + "은 10보다 큰 수 입니다.");
    alert(num + "은 10보다 큰 수 입니다.");
} else if (num === 10) {
  // 또 다른 조건 추가(하나의 if문 안에서 여러 번 사용 가능)
  console.log(num + "은 10입니다.");
    alert(num + "은 10입니다.");
} else {
  // 지정 조건 외 나머지 처리(하나의 if문 안에서 한 번만 사용 가능)
  console.log(num + "은(는) 10보다 작습니다.");
    alert(num + "은(는) 10보다 작습니다.");
}
*/
console.clear(); // 해당 코드 이전의 출력값을 지움

/* 성적 계산 프로그램 = 오류나는 코드!
const score = Number(prompt("input your score: "));

if (typeof score !== number && score > 100 && score < 0) {
  console.log("점수 입력 오류!");
} else if (score >= 90) {
  console.log('your score is "A"');
} else if (score >= 80) {
  console.log('your score is "B"');
} else if (score >= 70) {
  console.log('your score is "C"');
} else if (score >= 60) {
  console.log('your score is "D"');
} else {
  console.log('your score is "F"');
}
*/

// 연령대 구분 프로그램
/*
오류코드!
const age = Number(prompt("input your age: "));

if (typeof age !== number && age < 0) {
    // 음수나 숫자 외 타입을 입력했을 때 오류 처리 하고 싶었으나 문자가 걸러지지 않았음
    console.log("나이 입력 오류!");
} else if (age >= 17) {
    console.log(age + "살은 성인입니다.");
} else if (age >= 14) {
    console.log(age + "살은 청소년입니다.");
} else if (age >= 8) {
    console.log(age + "살은 어린이입니다.");
} else if (age >= 0) {
    console.log(age + "살은 유아입니다.");
} else {
    console.log(age + "살은 영아입니다.");
} */

// 제대로 실행되는 연령대 구분 코드!
const age = Number(prompt("input your age: "));

if (age >= 20) {
  console.log(age + "살은 성인입니다.");
} else if (age >= 14) {
  console.log(age + "살은 청소년입니다.");
} else if (age >= 8) {
  console.log(age + "살은 어린이입니다.");
} else if (age >= 4) {
  console.log(age + "살은 유아입니다.");
} else if (age >= 0) {
  console.log(age + "살은 영아입니다.");
} else {
  console.log("나이 입력 오류!");
}

/* 작동하는 연령대 구분 프로그램2
let age = -2;
// 다른 방법
if (age < 0) {
  console.log('음수 값이 들어왔습니다.');
} else if (age < 8) {
  // age가 0보다 크거나 같으면서 8보다 작은 경우
  console.log('유아');
} else if (age < 14) {
  console.log('초등학생');
} else if (age < 17) {
  console.log('중학생');
} else if (age < 20) {
  console.log('고등학생');
} else if (age < 150) {
  console.log('성인');
} else if (age >= 150) {
  console.log('나이로 들어올 수 없는 값이 입력되었습니다.');
} */

// if문은 첫 번째 조건에서 걸러지면 걸러질수록 뒤 코드를 실행하지 않기 때문에 코드 실행 속도가 빨라진다

// 조건문 중첩하기 (조건문 안에 조건문 작성 가능)
const userID = "sesac226";
const userPW = "12345678";

//JS DOC(java script document) : 함수 설명 인자 모음 / param : parameter
/**
 * login function
 * @param id string
 * @param pw string
 * @description 아이디와 비밀번호 값에 대한 적절한 알림창을 띄움
 * @author 이유진
 */
function login() {
  const inputID = prompt("input your ID: ");
  const inputPW = prompt("input your PassWord: ");

  if (userID === inputID) {
    if (userPW === inputPW) {
      console.log("login success!");
      alert(`welcome, ${inputID}님!`);
    } else if (inputID === "") {
      alert("ID가 입력되지 않았습니다.");
    } else {
      console.log("비밀번호 오류!");
      alert("비밀번호를 잊었습니까?");
    }
  } else {
    alert("아이디를 잊었습니까?");
  }
}

login();
