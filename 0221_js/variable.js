console.log("connected!"); // html과 연결 잘 됐는지 확인

/* 변수 선언 및 사용 */
var varName; // 변수 선언(value : undefined)
varName = "kermit"; // 변수 할당
console.log(varName); // 변수 출력
varName = "commit"; // 변수 재할당
console.log(varName); // 변수 출력
var varName2 = "kermit2"; // 변수 선언 및 할당

console.log(varName2); // 변수 출력
console.log("varName2"); // 문자열 출력

var varName = "pepe";
console.log(varName);
// var 특징 : 동일한 이름의 변수 재선언 가능, 변수 선언하지 않아도 값 할당 가능(유지보수에 최악)

let letName; // (let : 변수 선언 키워드) 변수 선언
letName = "SeSAC";
console.log(letName);

let letName2 = "GangDong";
console.log(letName2);

// let letName2 = "gang-il" // error (변수 중복 선언 불가)
letName2 = "gang-il"; // 값 재할당 가능
console.log(letName2);

// const : 반드시 변수 선언과 동시에 값 할당 필요하며 변수 재선언, 재할당 불가능!(변하지 않는 값일 때 사용)
const myName = "yujin";
console.log(myName);

/* 변수 선언 키워드 정리 
1. var: es6 이전에 사용되던 변수 선언 키워드로 사용 지양하는 것이 좋다
2. let: 변수 선언 후 값 할당 가능하며 재할당은 가능하나 중복 선언 안되는 변수 선언 키워드
3. const: 변수 선언과 값 할당이 동시에 필요한 상수(변하지 않는 값) 선언 키워드 - 제선언, 재할당 불가
*/

/* 식별자 규칙 : 변수명, 함수명 등 이름을 지정할 때 사용하는 단어
1. 키워드(특별한 역할을 이미 하고 있는 단어) 사용 불가 - var, let, const, if, function, for, return..
2. 숫자로 시작 불가
3. 특수문자는 _,$ 기호만 사용 가능
4. 공백 문자 사용 불가능

사용 가능한 식별자 : val, userName, a, num$, my_name
사용 불가능한 식별자 : const, 1st, my-name, my name
*/
