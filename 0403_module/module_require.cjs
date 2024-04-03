// commonjs에서 module 사용을 위해 package.json 파일에 "type":"commonjs" 추가해야 함

// npm init 명령어 : terminal에 원하는 폴더로 이동 후 명령어 입력하면 자동으로 해당 프로젝트의 package.json 생성, or 직접 만들기 가능
// cjs 확장자는 commonjs를 사용하는 파일임을 알림

// module01.cjs 사용
const person = require("./module01.cjs");

// console.log(person); // 해당 폴더 경로 혹은 이동 -> node "원하는 파일" -> 터미널 출력

// Person에 저장된 변수, 클래스, 함수 사용
// 변수 사용
// console.log(person.colors);
// 함수 사용
// console.log(person.sayName("장원영"));
// 클래스 사용
// const chaewon = new person.Person("채원", 20);

// console.log(chaewon);
// console.log(chaewon.getBornYear());

// 가져오고 싶은 변수, 클래스, 함수만 가져오기
// const { sayName } = require("./module01.cjs"); // 구조분해 할당 사용하여 sayName 함수만 가져오기
// sayName("안유진");

// module02.cjs 사용
// const colors = require("./module02.cjs"); // ???????????
const { colors, sayName } = require("./module02.cjs");
console.log(colors.colors);
sayName("Naco");
