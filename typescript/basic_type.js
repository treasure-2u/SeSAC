// Typescript 01
// TS는 JS로 변환 필수!
// 불필요한 파일 => ts-node 사용하면 자동 변환과 실행 가능

// 원시타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 추론, 타입 다른 변수 재할당 에러도 동일
var num = 1;
// num = '1' // error: 지정한 타입이 아닌 변수 작성 불가
num = 2;
console.log(num);
var str = "str";
var isTrue = true;
var undef = undefined; // 지정되지 않은 값
// let undef: undefined; // 같은 코드
var empty = null; // 개발자가 의도한 빈값
var numArr = [1, 2, 3, 4, 5]; // array : 요소가 어떤 타입인지 명시 필요(갯수는 상관없음)
var strArr = ["가", "나", "다", "라"];
var arr = [1, 2, 3, "가", "나", "다"]; // number or string type array
var arr2 = [true, null, false, [4, 22]];
var arr3 = [true, null, false, [4, 22]];
// any[] : 어떤 자료형이든 상관없이 들어갈 수 있는 배열 => typescript 쓰는 의미가 없음
var arrAny = [1, 2, 3, false, ["a", "b", 3, null]];
