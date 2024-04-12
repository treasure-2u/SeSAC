// 1. vanilla js로 작성

// export default function FuncState() {
//   let appleSnail = "애플스네일";

//   const inEng = () => {
//     // .state 요소를 찾아 해당 요소의 content를 apple로 바꾸기
//     const content = document.querySelector(".state");
//     content.innerText = "appleSnail";
//     appleSnail = "appleSnail";

//     console.log(appleSnail);
//   };
//   return (
//     <>
//       <h2>fucntion component에서 state 사용하기 - ver.vanilla js </h2>
//       <button onClick={() => inEng()}>영어로 바꾸기</button>
//       {/*  콜백으로 호출하지 않고 바로 호출하면 버튼 누르지 않아도 이벤트
//       <button onClick={inEng()}>영어로 바꾸기</button> */}
//       <div className="state">{appleSnail}</div>
//     </>
//   );
//   }

// 2. useState 사용
import { useState } from "react";

export default function FuncState() {
  //   const [state 변수명, state를 변경시키는 setter 함수] = useState(state의 초기값)
  //   useState를 사용해 state 선언 시 state와 state를 변경시키는 setter 함수를 배열로 반환
  //   해당 state와 setter 함수를 구조 분해 할당하여 변수에 저장하고 바로 사용
  const [appleSnail, setAppleSnail] = useState("애플스네일");
  const [number, setNumber] = useState(0);
  //   const [number, setNumber] = useState("0"); 문자열 0이여서 +1을 하면 0111.. 이렇게 됨

  return (
    <>
      <h2>function component에서 state 사용하기 - ver.useState </h2>
      <button onClick={() => setAppleSnail("appleSnail")}>영어로 변경</button>
      <div>{appleSnail}</div>
      <hr />
      <h2>number state를 1씩 증가시키는 btn 만들기</h2>
      <div>{number}</div>
      <button
        onClick={() => {
          // number state를 1 더하는 로직 다음에 alert을 띄우는 로직이 작성되어있어도
          // alert에 보이는 값은 1을 더하기 전 number 값이 보임
          // state의 setter함수는 비동기적으로 동작함
          // 그래서 number라는 state가 1 더한 값으로 업데이트되기 전
          // alert 창이 띄워져 버려서 1 더한 값이 아닌 원래 값이 보이게 됨
          // setNumber(number + 1);
          // alert(number);

          // 이를 해결하기 위한 하나의 예시
          // state의 setter 함수에 인자로 업데이트할 값이 아닌 콜백 전달
          // 해당 콜백의 인자로는 원래 state 값이고 원래 state 값에 1을 더하는 로직
          // setNumber((prevNum) => prevNum + 1)

          setNumber((prevNum) => {
            // alert(prevNum + 1);
            return prevNum + 1;
          });
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          setNumber((prevNum) => {
            return (prevNum = 0);
          });
        }}
      >
        {" "}
        초기화{" "}
      </button>
    </>
  );
}
