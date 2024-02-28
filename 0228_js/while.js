// while 문
/*
  while (조건) {
    조건에 만족하는 동안 실행될 코드
  }
*/
// 조건을 제어하는 구문이 없기 때문에 무한 루프에 빠지지 않도록 주의해서 사용
let num = 1;
while (num <= 5) {
  console.log(num);
  num++; // -> num = num + 1
}

console.log("----------------------");

// while을 사용해 9부터 4까지 콘솔에 찍기
num = 9;
while (num >= 4) {
  console.log(num);
  num--; // num--는 num 값을 1씩 감소시킴
}

console.log("---------------------");

// while문 사용해 1부터 10까지 짝수 출력
num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }

  num++;
}

console.log("---------------------");

// 퀴즈 while문 사용해 10부터 1까지 홀수 출력
num = 10;
while (num >= 1) {
  if (num % 2 === 1) {
    console.log(num);
  }

  num--;
}

console.log("---------------------");

// 무한루프 -> 조건식이 참이면 무한히 while문을 빠져나올 수 없음
let num2 = 0;
while (true) {
  console.log(num2);
  num2++;

  // break; // break 없다면 무한루프 또는 빠져나가야 할 조건을 설정
  // num2가 11이 되는 순간 아래의 조건이 참이 되면서 while문 종료
  if (num2 > 10) {
    break;
  }
}

num2 = 0;
while (confirm("계속 할까요?")) {
  // confirm의 확인 버튼은 true, 취소 버튼은 false를 반환
  // 취소 버튼 클릭 시 조건이 false가 되어 반복문 종료
  num2++;
  alert(`${num2}번째 alert 창`);
}

// 실습 1. 0~100 숫자 중 2 또는 5의 배수 총 합계 구하기
// ver.for문
let pracSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    pracSum += i;
  }
}

// ver.while문
let pracNum = 0;
let pracSum2 = 0;

while (pracNum <= 100) {
  if (pracNum % 2 === 0 || pracNum % 5 === 0) {
    pracSum2 += pracNum;
  }
  pracNum++;
}

// 실습 2. 13의 배수이면서 홀수 찾기
let input = Number(prompt("input a number"));

for (let i = 0; i <= input; i++) {
  if (i % 13 === 0 && i % 2 === 1) console.log(i);
}
