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

let letName; // let type 변수 선언
letName = "SeSAC";
console.log(letName);

let letName2 = "GangDong";
console.log(letName2);

// let letName2 = "gang-il" // error (변수 중복 선언 불가)
letName2 = "gang-il"; // 값 재할당 가능
console.log(letName2);
