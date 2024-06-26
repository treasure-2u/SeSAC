// typescript 01
// TS는 JS로 변환 필수!
// 불필요한 파일 => ts-node 사용하면 자동 변환과 실행 가능

// 원시타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 추론, 타입 다른 변수 재할당 에러도 동일

let num: number = 1;
// num = '1' // error: 지정한 타입이 아닌 변수 작성 불가
num = 2;
console.log(num);

let str: string = "str";
let isTrue: boolean = true;
let undef: undefined = undefined; // 지정되지 않은 값
// let undef: undefined; // 같은 코드
let empty: null = null; // 개발자가 의도한 빈값

let numArr: number[] = [1, 2, 3, 4, 5]; // array : 요소가 어떤 타입인지 명시 필요(갯수는 상관없음)
let strArr: Array<string> = ["가", "나", "다", "라"];

let arr: (number | string)[] = [1, 2, 3, "가", "나", "다"]; // number or string type array
let arr2: Array<boolean | null | number[]> = [true, null, false, [4, 22]];
let arr3: (boolean | null | number[])[] = [true, null, false, [4, 22]];

// any[] : 어떤 자료형이든 상관없이 들어갈 수 있는 배열 => typescript 쓰는 의미가 없음
let arrAny: any[] = [1, 2, 3, false, ["a", "b", 3, null]];

// 객체

// 타입 추론 (암묵적인 타입 지정)
let a = 5;
let b = "hello";
let c = true;
let d = null;
let e;

// a = "5"; // 지정하지 않은 number type 자동 배정
e = 5; // type 지정하지 않고 선언만 한 변수의 경우 any type으로 자동 지정 => ts 사용할 이유 없음
