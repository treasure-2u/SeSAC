// 함수 내보내는 방법
// 1. 함수 앞에 export 키워드 작성

export function consoleName(name) {
  console.log(`키미노 나마에와.. ${name}쨩!`);
}

export function consoleName2(name) {
  console.log(`키미노 나마에와.. ${name}쨩쨩!`);
}

// default keyword 작성 시 해당 함수가
export default function consoleNameMain(name) {
  console.log(`키미노 나마에와.. ${name}쨩쨩 main!`);
}

// 2. 마지막에 모아서 export문 작성
// function consoleName(name) {
//     console.log(`키미노 나마에와.. ${name}쨩!`);
//   }

// function consoleName2(name) {
//     console.log(`키미노 나마에와.. ${name}쨩쨩!`);
//   }

// export {consoleName, consoleName2}
