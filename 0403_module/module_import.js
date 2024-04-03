// package.json => "type": "commonjs" -> "type": "module"로 수정

// module01.js 사용
// import { flowers, getFlowersLength, getFlower } from "./module01.js";

// console.log(flowers);
// getFlowersLength();
// console.log(getFlower(0)); // return값 확인
// console.log(getFlower(10));

// 한 번에 export한 변수, 함수 등을 가져오는 방법
// import * as flower from "./module01.js";
// console.log(flower);

// module02.js 사용
import { showAnimals, addAnimal } from "./module02.js";
showAnimals();
console.log(addAnimal("capybara"));

// module03.js 사용 (default keyword => {} 없이 호출 가능)
import sayStatus from "./module03.js";

sayStatus("sleepy");
sayStatus("hungry");
sayStatus("boring");
sayStatus("happy");
