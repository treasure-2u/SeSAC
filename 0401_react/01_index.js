// 1. 전개 구문(spread)

// 1-1. 배열
const cosmetics = ["blusher", "eyeLiner", "lipTint", "eyebrow"];
const personalColor = ["chachaTint", "cafeLatte", "dandelion"];

const kBueaty = [...cosmetics, ...personalColor];
// console.log(kBueaty); // 배열이 합쳐짐

for (let i = 0; i < cosmetics.length; i++) {
  let arr = cosmetics[i];
  console.log(arr);
}

cosmetics.forEach((cosmetic) => {
  console.log(cosmetic);
});

cosmetics.map((cosmetic) => {
  console.log(cosmetic);
});

for (let cosmetic of cosmetics) {
  console.log(cosmetic);
}

// 연산(계산) 등이 필요한 작업이 아닌 단순히 전체 요소에 접근하고 싶은 경우에 사용

console.log(...[1, 2, 3, 4, 5]); // 개별 요소에 접근하지 않아도 사용 가능

// 배열 합치기
// 1. spread
console.log(...cosmetics, ...personalColor); // 요소 출력
console.log([...cosmetics, ...personalColor]); // 합쳐진 배열 출력

// 2. push로 새 배열에 넣어서 합치기
const newArray = [];

function usePush() {
  cosmetics.map((c) => newArray.push(c));
  personalColor.map((p) => newArray.push(p));
}

usePush();
// console.log(newArr);

// 3. concat : 배열 합쳐주는 method

const prodData1 = [
  {
    id: 1,
    product_name: "picnic",
    price: 700,
  },
  {
    id: 2,
    product_name: "choco_milk",
    price: 1500,
  },
  {
    id: 3,
    product_name: "coffee",
    price: 2500,
  },
];
const prodData2 = [
  {
    id: 4,
    product_name: "yakgwa",
    price: 500,
  },
  {
    id: 5,
    product_name: "kkakka",
    price: 0,
  },
];

const totalData = [...prodData1, ...prodData2];

// 1-2. 문자열
// 전개구문은 배열 뿐만 아니라 객체나 문자열에도 사용 가능
// for of 문에도 문자열 사용 가능

const str = "sesac";
console.log(...str);

const strToArr = [...str];
console.log(strToArr);

const strToArr2 = str.split("");
console.log(strToArr2);

// 1-3. 객체
let me1 = {
  name: "yuzzang",
  height: 162,
  married: false,
  pet: null,
};

let me2 = {
  name: "yuzzang",
  like: ["game", "jogging"],
  pet: {
    name: "first",
    like: ["yuzzang", "sleeping"],
  },
  greeting: function () {
    console.log(`hi, my name is ${this.name}, my height is ${this.height}cm.`);
  },
};

// 객체 합체 시 동일한 key 있다면 나중 key value가 저장(적용)됨
let me = { ...me1, ...me2 };
console.log(me);
me.greeting(); // 객체 내부에 value로 저장된 함수 사용 시 점 표기법만 가능

// 객체 합체 및 key 추가
me = {
  ...me1,
  ...me2,
  status: "hungry",
};
console.log(me);

me = {
  ...me,
  mbti: "entp",
};
console.log(me);

// 실습
const word1 = "abc";
const word2 = "xyz";
const newWord = [...word1, ...word2];

console.log(newWord);

// 다른 방법 1(두 개의 문자열을 하나의 문자열로 합친 후 배열로 저장)
const newWord2 = (word1 + word2).split("");
console.log(newWord2);

// 다른 방법 2(문자열을 concat method로 연결 후 배열로 저장)
const newWord3 = word1.concat(word2).split("");
console.log(newWord3);

// 다른 방법 3(문자열을 배열로 변환 후 concat 사용해 연결)
const newWord4 = word1.split("").concat(word2.split(""));
console.log(newWord4);

// 구조 분해 할당

// 2-1. 배열의 구조 분해 할당

const icecream = ["strawberry", "mintChoco", "greentea"];
/*
기존 호출 방법
const mintChoco = icecream[1];
const greentea = icecream[2];
const strawberry = icecream[0];
*/
const [strawberry, greentea, mintChoco] = icecream;
console.log(mintChoco); // 배열(순서 있는 값의 모임)의 구조분해 할당은 변수의 순서 중요

const colors = ["red", "orange", "yellow", "green"];

// 중간에 변수에 담아 사용하지 않는 요소가 있는 경우 해당 수선를 생략하고 작성
const [red, oran, green] = colors;
// console.log(yellow); // 없음

// 가장 마지막 요소를 변수에 저장하지 않을 경우 쉼표 없이 생략하면 됨
const [c1, c3] = colors;
console.log(c1);
console.log(c3);

// 구조분해하는 배열보다 변수가 더 많은 경우 배열의 길이를 넘어가는 변수는 자동으로 undefined
const [cc1, cc2, cc3, cc4, cc5] = colors;
console.log(cc5); // index number is undefined

const [
  ccc1,
  ccc2,
  ccc3 = "ccc3 default", // default 값이 사용되지 않고, colors 배열의 2번 index에 저장
  ccc4,
  ccc5 = "ccc5 is maybe indefined", // default rkqtdl tkdydehla
] = colors;
console.log(ccc3);
console.log(ccc5);

// 2-1-1. 배열을 사용해 변수 교환
let value1 = "second";
let value2 = "first";

let temp; // 임시로 사용되는 값을 위한 변수 temp (terporary 약자)

// 변수의 값 교환
temp = value1; // temp 변수의 값은 'first'
value1 = value2; // value1 value = 'second
value2 = temp; // value2 value = 'first'

console.log(value1, value2); // first, second

// 구조 분해 할당을 이용헤 변수 교환
value1 = "second";
value2 = "first";

// 2-2. 객체의 구조 분해 할당
const myPhone = {
  name: "iPhone",
  brand: "apple",
  color: "pink",
  version: 13,
};

console.log(myPhone.name); // 점 접근법
console.log(myPhone["name"]); // 대괄호 접근법

/* 기존 방법
const name = myPhone.name;
const color = myPhone.color;
const ver = myPhone.version;

console.log(name, color, ver);
*/

// 객체 구조 분해 할당 => 순서에 상관없이 구조 분해 할당하는 객체의 key와 동일한 변수에 값이 저장
const { color, name, version } = myPhone;
console.log(name, color, version);

// 다른 이름으로 변수 할당 불가
const { c, n, v } = myPhone;
console.log(c, n, v); // undefined -> key = 변수명 달라서!

// 다른 이름으로 변수를 할당하려는 경우
const { name: nn, color: cc, version: vv } = myPhone;
console.log(nn, cc, vv);

// key가 존재하지 않을 때를 대비하여 default 값 지정하기
const { name: nnn, color: ccc, giga: ggg = 256, version: vvv } = myPhone;
console.log(nnn, ccc, ggg, vvv);

// 전개 연산자 추가 사용 예시
const { key1, key5, ...obj } = {
  key1: "value1",
  key2: 2,
  key3: "value3",
  key4: "value4",
  key5: 5,
};

console.log(key1); // 'value1'
console.log(key5); // 5
console.log(obj); // key1과 key5를 제외한 key-value 쌍이 모두 obj 변수에 저장

// 함수에서 전개연산자와 구조 분해 할당, default 값 지정

function test(...val) {
  // ...val의 의미는 인자의 갯수를 제한하지 않고 모두 받겠다는 의미
  // 모든 인자는 배열로 val이라는 별명을 사용해 접근할 수 있음
  const [v1, v2, v3, v4 = "없음", ...rest] = val;
  // v4 변수에 할당할 값이 없을 경우 즉, 인자가 3개 이하로 들어온 경우
  // '없음'이라는 default 값이 v4에 저장됨

  console.log(v1);
  console.log(v2);
  console.log(v3);
  console.log(v4);
  console.log(rest);
}

test(1, 2, 3, 4, 5, 6, 7, 8);
test(1, 2, 3);

// quiz
// 매개변수 갯수 제한하지 않고 모든 매개변수의 합을 구하는 함수

function addNums(...num) {
  let sum = 0;

  num.forEach((num) => (sum += num));

  //   for (let i = 0; i < num.length; i++) {
  //     sum += num;
  //   }
  return sum;
}

console.log(addNums(1, 2, 3, 4, 5, 6));

// 매개변수에 기본값 설정
function introduce(name, like = "cosmetic", hate, gender = "female") {
  console.log(
    `hi, my name is ${name}, ${like} is my favorite. but ${hate} is hate. and my gender is ${gender}.`
  );
}

introduce();
introduce("yuzzang", "watching movie", "running", "girl"); // 넘치는 인자는 문제 발생X
// introduce("yuzzang", , "jogging") // 함수 내부에는 인자를 빈 채로 둘 수 없음
introduce("yuzzang", undefined, "jogging");
