// switch문 : case라는 조건에 따라 적절한 코드 블럭이 실행되는 조건문(값이 명확할 때 주로 사용됨)
// break로 해당 스코프를 빠져나가지 못하면 원하지 않은 case까지 실행되기 떄문에
// 원하는 코드 실행 후 필수로 break 작성하여 빠져나올 수 있도록 하고 그 이후 작성된 코드는 실행되지 않는다
// switch - default = if - else
let userType = "user";

switch (userType) {
  case "user":
    console.log("유저 입니다.");
    break;
  case "admin":
    console.log("관리자 입니다.");
    break;
  default:
    console.log("외부인 출입금지");
}

// if문으로 작성된 성적 계산 프로그램 -> switch문으로 수정
x = Number(prompt("점수 : input your score📖"));
switch (parseInt(x / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
}

// 삼항연산자
let num = Number(prompt("홀짝 - input a number"));
if (num % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

num % 2 === 0 ? "짝수" : "홀수";

// let loggedIn = Number(true);
// loggedIn == 1 ? console.log("로그인 유저") : console.log("비로그인 유저");
let loggedIn = String(1);
loggedIn === true ? console.log("로그인 유저") : console.log("비로그인 유저");

let now = new Date().getHours();
// 0 <= now && now <= 11 ? console.log("오전") : console.log("오후");
console.log(now < 12 ? "오전" : "오후");
