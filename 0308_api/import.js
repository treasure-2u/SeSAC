// 다른 JS file의 함수나 변수를 불러와 사용하기
// export문 : 함수 내보내기
// import문 : 함수 불러오기
// 유지보수 개선, 불필요한 코드 반복을 줄여 효율적인 개발 가능

// 함수 불러오기
// export 키워드만 작성한 경우 중괄호{}에 감싸서 작성
import { consoleName, consoleName2 } from "./utill_func.js";
// export default 키워드 작성 시 중괄호 감싸지 않고 불러옴
import consoleNameMain from "./utill_func.js";

// 한 줄로 여러 파일 import 가능(default 함수와 다른 함수들도 불러올 수 있음)
// import consoleNameMain, { consoleName, consoleName2 } from "./utill_func.js";

consoleName("sesac");
consoleName2("sesac");
consoleNameMain("sesac");
