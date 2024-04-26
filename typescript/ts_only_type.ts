// typescript 02
// 1. tuple
let drink: [string, number] = ["coke", 2000];
// drink = ["cider", 2000, true] // error : 배열의 길이와 지정한 타입 순으로 선언되지 않음

drink[0] = "cider"; // 배열 요소에 index 통해 접근 가능
// drink[0] = 2000; // error : 정해진 타입이 아닐 시 수정 불가

drink.push("push element");
console.log(drink); // push 가능

// drink[3] = "수정"; // 미리 지정된 type이 아닌 요소는 수정 불가

//
// spread 사용 가능
console.log(...drink);

// 2. readonly
// 길이를 특정하고, type과 순서를 "완벽히" 고정하기 위해 사용
let bread: readonly [string, number] = ["sio bread", 2500];
// bread[0] = "bagette"; error : 요소 값 수정 불가
// bread.push("push element"); : 요소 추가 불가능

// 3. Enum
// Enum - 정보를 그룹화할 때 사용, 예시 : 회원 권한
enum Auth {
  admin = 0, // 관리자
  user = 1, // 회원
  guest = 2, // 비회원
}

// Enum은 객체가 아니지만 점 접근법으로 접근 가능
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

const userType: number = 2;

if (userType !== Auth.admin) {
  console.log("관리자 권한이 없습니다.");
  if (userType !== Auth.user) {
    console.log("회원가입이 필요합니다.");
  }
}

// enum 값 자동 할당 - 같은 타입으로 작성하는 것이 좋음
enum productType {
  coffee,
  nonCoffee,
  tea,
  juice,
}

// 문자형 Enum
enum Cafe {
  americano = 1500,
  chocoLatte = 4500,
  iceTea = 2500,
  orangeJuice = 6000,
}

// 4. any : 어떤 data type이든 상관 없이 오류 발생 X
// 빈 배열 선언할 때, 받아오는 data type이 불확실한 경우, 할당해야 하는 type 알 수 없을 때(외부 library) 사용
let myVal: any = 1;
myVal = "string";
console.log(myVal);
myVal = [
  1,
  2,
  3,
  "string",
  true,
  ["array in array", null, { name: "arr in arr in obj" }],
];
console.log(myVal); // 값 할당 및 수정 자유로움

// Quiz. 아래와 같이 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기 + 수정 안되도록
const olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

// 사용자가 직접 타입을 정의할 수 있는 interface & type
// 5. interface
const cham3: object = {
  name: "yumi",
  tier: true,
}; // 말도 안되는 값 들어갈 수 있음

interface LolCham {
  readonly name: string;
  // readonly: 해당 key의 value는 선언 이후 수정 불가
  // 원래 객체 내 key의 value const여도 값 수정 가능하지만
  // interface 객체 내 key의 value(type)를 const로 선언
  tier?: number;
  // ? : 해당 key 없어도 error 안남 => 확장 가능성 높임
}

// error : 아래에서 interface 확장하여 error
// const cham1: LolCham = {
//   name: "nami",
//   tier: 2,
// };

// 5-1. interface 확장
// extends keyword 필요 없이 interface에 추가할 key와 value type 작성 시 확장 가능
interface LolCham {
  position: string;
}

const cham2: LolCham = {
  name: "janna",
  tier: 2,
  position: "sup",
};

// 5-2. interface 상속
interface Lol extends LolCham {
  readonly remake: boolean;
}

// 6. 사용자 정의 type - 상속 불가
type UserLolTier =
  | "Challenger"
  | "Grandmaster"
  | "Master"
  | "Diamond"
  | "Platinum"
  | "Gold"
  | "Silver"
  | "Bronze"
  | "Iron";

interface Lol {
  userTier: UserLolTier;
}

// key를 지정하지 않은 상태에서 해당 key의 type 지정 가능
// 점 접근법 안된다면 대괄호 접근법으로 타입 key value 접근 가능

// 7. 함수형
interface Calc {
  (a: number, b: number): number; // (해당 함수의 인자와 인자의 타입 작성): 반환값의 타입 작성
}

const sum: Calc = (a, b) => {
  return a + b;
};

// interface 사용하지 않고 함수 선언하는 경우
const sum2 = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(1, 2)); // 매개변수의 지정된 type이 하나라도 다르면 error

// type - 값 특정 가능
type Toy = {
  name: string;
  price: number;
};

const gundam: Toy = {
  name: "gundam",
  price: 35000,
};

// type의 값 특정
type Gender = "female" | "male";
const sesac: Gender = "female";
// error : const gangdong: Gender = "Male";

// type의 type을 제한
type Name = string;
const gangil: Name = "gangil";

/* interface vs type

interface
  - 주로 객체 타입 지정에 사용
  - 확장 가능(interface 선언처럼 추가 key만 작성)
  - 상속 가능(extends keyword로 해당 interface 가져오고)

type
  - 훨씬 자유롭게 사용
  - 확장 불가
  - ?
*/
