console.log("connected!");

// 동시에 원하는 값 연결하여 출력하기 : ,와 +
console.log("abcd", "efgh"); // 요소 간 자동 띄어쓰기
console.log("abcd" + "efgh"); // 요소 간 자동 띄어쓰기 X

const myName = "yj";
console.log("hi", "my", "name", "is", myName);
console.log(`name: ${myName}`); // Template Literals: ${변수명} (문자열 내 변수를 사용할 때 쓰임)

// 기본형 (Primitive type)
// 1. String : text 정보, "구조", 따옴표로 감싸진 모든 것들을 문자열로 인식
const user_name = "SeSAC";
const user_email = "sesacgd3@naver.com";
const user_info = "user name: ${user_name}";

// 2. number : 정수, 소수 - 연산 가능
let add = 1 + 3;

// 3. boolean : true, false 중 하나의 값을 가지는 논리 요소
let checked = true;

// 4. undefined : 값과 타입이 지정되지 않은 상태
let obj = { abc: 123 };
console.log(obj.efg);

// 5. null : empty value, 빈 값을 할당할 때 사용하는 type
const empty = null;
console.log(empty);

// 6. array : 순서가 있는 데이터의 묶음(배열)
let arr = [1, "str", false, null, undefined];
let fruits = new Array("apple", "orange", "banana", "graph");

console.log(arr[0]); // 0번 인덱스 요소를 뽑아 콘솔에 출력
console.log(fruits);

// Quiz. 아래의 다차원 배열(배열 안에 배열이 있는 형태)에서 "아이스크림" 콘솔에 찍기
const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

const korean = [
  ["가", "갸", "거", "겨"],
  ["나", "냐", "너", "녀"],
  ["다", "댜", "더", "뎌"],
];

console.log(korean[0], korean[1], korean[2]);

// 7. object : 객체, {key1 : value1, key2 : value2, ...} - 배열은 순서가 있지만 객체는 키-값 형태로 작성
let rabbit = {
  name: "ddolkki",
  age: 5,
  isCute: true,
  talk: function () {
    return "head bunting";
  },
};

console.log(rabbit.name);
console.log(rabbit["name"]); // 별로 사용되지 않음

rabbit.like = "carrot"; // 값 추가 및 수정 가능
console.log(rabbit.like);

/* js 자료형(data type)
    - 기본형 (primitive) : number, string, boolean, undefined, null
    - 객체 (object) : array, object(구조 - {키:값})
*/

// js 형변환
let a = "3";
let b = 2;
let c = "10";

// 문자 + 문자
console.log(a + c); // 문자열(310)
console.log(c - a); // 7(정수형으로 바뀜)
console.log(c / a); // 정수형으로 변환
console.log(a * c);

// 숫자 + 문자
console.log(b + a); // 문자열로 변환
console.log(b - a); // 숫자 형변환

const introduce = {
  name: "yujin",
  age: "year of the Pig",
  pet: "shrimp",
  marriage: false,
  mbti: "entp",
  hobby: "산책",
};

console.log(typeof "문자열");
console.log(typeof 1);
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof NaN); // number (NaN: Not a Number) -> 숫자를 숫자 아닌 것처럼 취급할 때 사용
console.log(typeof abc);

// prompt() = scanf(); -> 입력받은 요소들은 문자열 형태('+'연산 때문에 형변환 필요)

// 형변환 : 문자열
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(str1.toString());
console.log(typeof String(str1));
console.log(String(str3));

// 형변환 : 숫자
let n1 = true;
let n2 = false;
let n3 = "123";
let n4 = "12.5";

console.log(Number(n1)); // 1=true
console.log(Number(n2)); // 0=false
console.log(Number(n3) - Number(n4));
console.log(parseInt(n3) - parseInt(n4)); // 소수점 버리기
console.log(parseFloat(n3) - parseFloat(n4)); // 소수점 챙기기

// 사용자의 점수 받아서 평균 내기
let your_mathScore = Number(prompt("input your math score"));
let your_engScore = Number(prompt("input your english score"));
let yourScore = [your_mathScore, your_engScore];

let avgScore = (yourScore[0] + yourScore[1]) / yourScore.length;

alert(`your avg score is ${avgScore}!`);
// console.log(avgScore.avgScore);
