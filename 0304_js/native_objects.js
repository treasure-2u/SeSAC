// js 표준 내장 객체(java script가 기본적으로 가지고 있는 객체 - string, number, array, math, ...)

// 1. Date 객체 : 시간, 날짜에 대한 정보를 얻기 위해 사용

// 현재 날짜
let nowTime = new Date();
console.log(nowTime);

// 1000ms = 1s
// 1000ms * 3600 = 1s * 60 * 60 = 1h
// 1000ms * 3600 * 24 = 1day

// 1970년 1월 1일 0시 기준(표준시간)으로 해당 ms만큼 지난 시간
let timeMachine = new Date(1000 * 3600);
console.log(timeMachine);

// new Date(year, month, date, hour, minutes, seconds, ms)
// year: 4자리, month: 0(1월) ~ 11(12월), date: 1~31(값이 없으면 1로 처리), 그 외 인자는 값이 없으면 0
console.log(nowTime.getFullYear()); // 연도(type = number)
console.log(nowTime.getFullYear() + "년"); // 연도(type = string)
console.log(nowTime.getMonth()); // 월(0~11)
console.log(nowTime.getDate()); // 일
console.log(nowTime.getHours()); // 시
console.log(nowTime.getMinutes()); // 분
console.log(nowTime.getSeconds()); // 초
console.log(nowTime.getMilliseconds()); // 밀리초
console.log(nowTime.getDay()); // 요일(일:0~토:6)

// 현재 날짜의 요일을 기준으로 오늘이 주말인지 평일인지 알아내기
// if문
if (nowTime.getDay() === 6 || nowTime.getDate() === 0)
  console.log("신나는 주말");
else console.log("평일");

// switch문
switch (nowTime.getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("평일");
    break;
  case 0:
  case 6:
    console.log("주말");
    break;
}

// 함수 - 반환값 return 때문에 함수화 필요
function checkWeekend() {
  switch (nowTime.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "평일"; // return(값 반환) 후 해당 스코프 빠져나감
    case 0:
    case 6:
      return "주말";
  }
}

console.log(checkWeekend());

// 3. 삼항연산자
const todayStatus =
  nowTime.getDay() === 0 || nowTime.getDay() === 6 ? "주말" : "평일";
console.log(todayStatus);

// Math 객체(수학적 상수와 함수를 위한 속성과 메서드)
// 속성 : Math.E(자연로그), Math.PI(파이), Math.SQRT2(2의 제곱근)
// 메서드 : Math.max(인자) - 최대값, Math.min(인자) - 최소값, Math.random() - 0<=x<1 사이의 난수 생성, ceil(올림), floor(내림), round(반올림)

Math.random() * 10;
