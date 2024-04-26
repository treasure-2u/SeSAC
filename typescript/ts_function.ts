// typescript 03
// 1. void : return이 없는 함수

function consoleStr(str: string): void {
  console.log(str);
}

// error
// function consoleStr(str: string): void {
//   return str;
// }

// error fix
// function consoleStr(str: string): string {
//   return str;
// }

// ? = optional 인자
/* js에서는 문제없이 동작하는 코드
function jsPrint(a, b) {
  console.log(a);
  console.log(b);
}

jsPrint(1, 2);
jsPrint("1", 2);
jsPrint("1", "2");
jsPrint(["1", "2"], [1, 2]);
jsPrint("두 번째 인자 없이도 실행됨");
*/

function tsPrint(a: number, b?: number): void {
  console.log(a);
  console.log(b);
}

tsPrint(1, 2);
tsPrint(1); // 인자 + ?: undefined로 인자를 보낼 수도 있음을 알려주어 error 발생 x

// 함수 다른 방식으로 선언하기
// 방법 1.
function myfunc(a: number): void {
  console.log("function keyword 사용한 함수");
}
// 방법 2.
const myfunc2 = (a: number): void => {
  console.log("함수 표현식으로 작성한 함수");
};

// interface에서 함수
interface Greet {
  name: string;
  hi(): void; // hi() : console.log("hi") / return X
  bye(str: string): string; // bye(str이라는 string type 인자 받음) return => string 반환
}

const user: Greet = {
  name: "sesac",
  hi() {
    console.log("hi");
  },
  bye(str: string) {
    return `bye ${str}`;
  },
};

user.hi();
user.bye("see you soon");

// 2. never : 함수의 끝에 절대 도달하지 않는 경우에만 할당 가능
// while 같은 무한 루프 함수

function neverEnd(): never {
  while (true) {
    console.log("neverEndingStory");
  }
}

// 인자의 type은 인자로 받는 소괄호 옆에 작성
