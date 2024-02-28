// method

// 문자열과 관련된 속성(ex. ()값과 인자를 가지지 않는 length)과 method(js 내장함수)

let str = "Strawberry Moon";
let str2 = "  Strawberry Moon   ";

// string indexing
console.log(str[1]); // 배열은 0부터 start
// Sonny 출력
// console.log(str[0] + str[12] + str[14] * 2 + str[9]); // 문자열이라 계산 x -> SoNaNy 값 출력
console.log(str[0] + str[12] + str[14] + str[14] + str[9]);

console.log;

console.log("str 문자열의 길이:", str.length);
console.log("str 문자열의 길이:", str2.length);

// 인자 없는 string method : 변수.method()
// trim : id나 pw 같이 회원가입 혹은 댓글 등 게시판 작성할 때 양끝 공백 없애주는 것에 주로 쓰임(빈 값 들어갔는지)
let msg = " League Of Legend ";
console.log(msg.toUpperCase()); // 문자열 전체 대문자 변환
console.log(msg.toLowerCase()); // 문자열 전체 소문자 변환
console.log(msg.length); // 문자열 길이 반환
console.log(msg.trim().length); // -> * chaining (method 연달아 사용 가능)
console.log(msg.trim().toUpperCase()); // 양쪽 공백 제거 후 대문자 변환

// 인자 있는 string method
// indexOf('') : 맨 처음 만나는 문자열의 인덱스 번호 반환, 없을 경우 -1 출력
// replace('str1','str2') : 맨 처음 만나는 문자만인 str1을 str2로 변경(교체 전 값, 교체 후 값)
// replaceAll() : 해당하는 모든 문자열 교체
// slice(startIdx[, endIdx]) : startIdx ~ endIdx -1까지 자름 (음수 index 가능)
// repeat(n) : 문자열을 n번 반복
// split() : 인자로 받은 문자열을 기준으로 나누어 해당 문자열을 배열로 반환
// charAt(n) : 인자로 받은 n(숫자) 인덱스 번호에 대한 문자열 하나 반환

let fruit = "applemango";

console.log(fruit.indexOf("mango")); // 5
console.log(fruit.indexOf("apple")); // 0
console.log(fruit.charAt(5)); // = console.log(fruit[5]); // 결과값 : m

console.log(fruit.slice(5)); // mango // 5부터 문자열 끝까지
console.log(fruit.slice(8, -2)); // go // slice에서 혹시 이 기능 필요할 수도 있으니 마무리 인덱스 인자가 추가된 것(-가 아닌 한 방향으로 정확한 인덱스를 넣어줄 것)
console.log(fruit.slice(8, 10)); // go
console.log(fruit.slice(-1)); // -1은 배열 뒤에서부터 셈
console.log(fruit); // fruit 값은 변화 없음, 변수에 담아서 사용하지 않았기 떄문

let msg2 = ' "weekend" is so amazing!! ';
console.log(msg2.replace("!", "OMG"));
console.log(msg2.replaceAll("!", "OMG"));
console.log("2024.02.28".replaceAll(".", "-")); // 변수 선언 없이도 사용 가능
console.log("Hello World!\n".repeat(3));
console.log();

console.log("2024-02-28".split("")); // 모든 글자 나누어 배열 반환
let date = "2024-02-28".split("-");
console.log(typeof date); // object(=array)

// ----------------------------------------------------------
// array method
// push, pop, shift, unshift, include, length, indexOf, reverse, join
// indexOf : string indexOf와 비슷하나 요소에 문자열만 넣을 수 있는 것은 아님
// join : string method split 과 반대 기능

// method chaning : return 값을 가지고 있는 경우에만 method 연결해서 사용 가능

let arr_num = [1, 2, 3, 4, 5];
let arr_ani = ["quakka", "panda", "dog", "capybara"];

arr_num[5] = 6;
console.log(arr_num);
// arr_num[7] = 8; // 중간에 empty 값 생김 -> 배열 길이를 건너뛰는 요소 추가는 하지 않는 것이 좋음

// push() : 배열 마지막 요소 추가, pop() : 배열 마지막 요소 제거
arr_ani.push("shrimp");
console.log(arr_ani);
arr_ani.pop();
console.log(arr_ani);

// unshift() : 배열 맨 앞에 요소 추가, shift() : 배열 맨 앞 요소 제거
arr_ani.unshift("meerkat");
console.log(arr_ani);
arr_ani.shift();
console.log(arr_ani);

// 중요! push, pop, unShift, shift : string method와 다르게 기존 배열이 변경됨

// includes() : 해당 배열의 인자로 받은 값과 동일한 요소의 유무를 boolean type으로 판단
console.log(arr_ani.includes("dog")); // true

// idexOf() : 문자열 내 해당 요소 index 반환
console.log(arr_ani.indexOf("capybara")); // 3

// length : 배열 요소의 갯수 반환 (속성)
console.log(arr_ani.length); // 4

// reverse() : 배열의 순서를 역순으로 변경하여 반환 (배열 변경 O)
console.log(arr_ani.reverse());
console.log(arr_ani);

// join() : 배열을 인자의 문자열 기준으로 합쳐 문자열로 반환 (기존 배열 변경 X)
console.log(arr_ani.join()); // 인자 미작성 시 배열 내 (,)까지 문자열로 변환
console.log(typeof arr_ani.join());
console.log(arr_ani.join("")); // 빈 문자열이 요소가 되면 모든 요소가 붙어서 문자열로 반환
console.log(arr_ani.join(" and "));

// --------------------------------
// array - for of 반복문
// for문일 때
let arr_chams = ["lux", "nami", "janna", "ash", "jinx"];

console.log("for 반복문 사용한 출력값");
for (let i = 0; i < arr_chams.length; i++) {
  console.log(arr_chams[i]);
}
// for of문일 때 : index나 length 없이 배열에 직접 접근
console.log("for of 반복문 사용한 출력값");
for (let cham of arr_chams) {
  console.log(cham);
}

// forEach() : 매개변수 3개를 받는, 배열의 반복을 위한 메서드(=함수)
// 구조 : function (요소(변수)명[, index name[, array(type) name]]) -> 하나 이상의 인자 작성 필요(optional 인자들)
console.log("forEach 반복문 사용한 출력값");
arr_chams.forEach(function (cham, idx) {
  console.log(cham); // 요소 출력
  //   console.log(idx); // index 출력
});

// array method - 기존 배열 변경이 아닌 new array로 반환
// filter() : 해당 요소를 모두 찾아서 배열로 반환
// arr_ani에서 5자 이상의 길이를 가진 요소만 모아 새로운 배열 만들기
let filter_arr_ani = arr_ani.filter(function (ani) {
  return ani.length >= 5;
});
/* = let filter_arr_ani = arr_ani.filter((ani)=> {return ani.length >= 5)}; */
/* = let filter_arr_ani = arr_ani.filter((ani)=> ani.length >= 5); */

console.log(`filter method 사용 : ${filter_arr_ani}`);
console.log(`기존 array : ${arr_ani}`);

const anis = ["meerkat", "riger", "racoon", "gozila", "unicon", "dragon"];
const arr_thinkBig = anis.filter(function (ani) {
  return ani.charAt(0) === "ra" || ani.charAt(1) === "ra";
});

// find() : 배열에서 특정 조건을 만족하는 첫 번째 요소를 값으로 반환
let findResult = anis.find(function (ani) {
  return ani.charAt(0) === "dr";
});
console.log(`find method 반환값 : ${findResult}`);

// map() : 배열 내의 모든 원소에 대해 호출한 함수의 결과를 모아 새로운 배열 반환
// arr.map(function (value[, index[, arr]]) {}) = for each랑 비슷
// 배열의 모든 원소를 for문으로 돌릴 수 있지만 메소드로 간단히 변경 가능
let nums = [1, 2, 3, 4, 5];
let mapArr = nums.map(function (n) {
  return n * 100;
});
console.log(`map method로 출력한 값 : ${mapArr}`);
