// 동기: 순서대로 코드 진행(코드 실행 안되면 그대로 멈춰있음)
// 비동기 : 먼저 끝난 코드가 더 빨리 실행됨
// 간단한 비동기 코드 예시 - setTimeout(함수, 시간(ms)) : 코드 실행 멈춤 X, 인자로 준 시간이 지난만큼 내부 코드 실행
// setTimeout()이 계속 실행되고 있는 것임
console.log("hello world_1");

setTimeout(() => {
  console.log("hello world_2"); // 콜백함수(함수 내부의 인자 함수)
}, 10);

console.log("hello world_3");

// 만일 비동기 코드를 동기적으로 실행 원할 시 동기적으로 실행할 코드를 비동기 코드 내 삽입하면 됨
/* setTimeout(() => {
    console.log("hello world_2");
    console.log("hello world_3");
  }, 1000); */

// 사용자 id 입력받고 비동기적으로 서버와 통신하는 유사 로그인 로직 연습
const id = prompt("input your id!");
let userId;
console.log("로그인 시도");

setTimeout(() => {
  userId = "dldbwls1335"; // 서버에서 받아온 가상 id 임의 작성
  console.log("서버에서 id 받기 성공적!");
  if (id === userId) console.log("login success!");
  else console.log("login fail");
}, 2000);
// if문이 setTimeout 밖에 있으면 s.t.o 내부의 콜백함수 실행 전이라 서버에서 데이터 아직 안받아왔기 때문에 로그인 무조건 실패
// 사용자에게 입력받은 id === 21의 userId는 undefined값
