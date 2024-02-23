console.log("connected!");

/* 연산자
1. 대입연산자(=) : 변수에 값을 할당할 때 사용하는 연산자 ex. let num = 1
2. 비교연산자(==, !=, ===, !==) : 피연산자의 값 혹은 값과 타입이 같은지 비교하는 동등 연산자 ex.
3. 크기 비교 연산자 : >, >=, <, <=
4. 산술 연산자 : +, -, *, /, %(나머지), **(거듭제곱)
5. 논리 연산자 : !, &&, ||
*/

console.log("--------대입연산자--------");
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 == "1"); // true
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log(1 != "1"); // false

console.log("--------비교연산자--------");
let userAge = 16;
let age = userAge > 19;

console.log("-------if문-------");
let userAge1 = 16;
let age1 = userAge;
let success = "통과";
let fail = "돌아가";

if (age1 > 19) {
  console.log(success);
} else if ((age1 = 19)) {
  console.log("딱이네");
} else {
  age1 = 0;
  // console.log(fail);
  console.log(age1);
}

console.log("-------크기 비교 연산자-------");

console.log("-------산술 연산자-------");
console.log(1 % 2);
console.log(2 ** 2);

console.log("-------논술 연산자-------");
console.log(!!true);
console.log(1 < 2 && 1 < 5);
console.log(1 > 5 || 1 > 0 || 1 > 1);
console.log(!(2 > 1 && -2 > 1) || 5 > 1);
