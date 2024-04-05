// function FunctionComponent() {
//   return <h1>function component</h1>;
// }

// export default FunctionComponent;

// rfc로 함수형 컴포넌트 쉽게 생성 가능

//

import React from "react";
import cat from "../assets/cat.jpeg";

export default function FunctionComponent() {
  const text = "안녕하세요!";
  const name = "yuzzang";
  const show = true;
  const textStyle = { backgroundColor: "navy", color: "pink", fontWeight: 900 }; // js문법
  const handleClick = () => {
    alert("click!!!");
  };

  const checkUser = () => {
    if (name === "yuzzang") {
      return "HHHHHHHI!";
    } else if (name === "lily") {
      return "long time no seeeee~";
    } else {
      return "go back to your country!!!!";
    }
  };

  return (
    <>
      {/* 1. 반드시 하나의 최상위 부모 요소로 감싸서 return
          - virtual dom에서 컴포넌트의 변화를 감지할 때 효율적으로 비교하기 위해 컴포넌트 내부에는 하나의 DOM 트리 구조로 이뤄져야 한다고 react 정의
          (부모를 하나의 컴포넌트로 인식, 효율적인 재렌더링 가능!)
          - div, section, article,header, footer 등 최상위 부모 요소는 어떤 요소도 상관 없음
          - 불필요한 태그 만들지 않기 위해 <></>와 같은 태그로 감싸는 경우도 많음(fragement 단축 문법) -> react 제공
          - react 공식 문서 참고 : https://react.dev/reference/react/Fragment
      */}
      <div>FunctionComponent1</div>
      <div>FunctionComponent2</div>

      {/* 2-1. js 문법 사용 가능(변수) */}
      <div>인사는 {text}</div>

      {/* 2-2. js 문법 사용 가능(삼항연산자를 사용한 조건 렌더링 1(ver.간단)) */}
      <h3>{name === "yuzzang" ? `welcome, ${name}!` : "who are you?"}</h3>

      {/* 2-3. js 문법 사용 가능(삼항연산자를 사용한 조건 렌더링 2(ver.복잡)) */}
      <h3>{checkUser()}</h3>

      {/* 2-4. js 문법 사용 가능(조건부 렌더링 - && 사용) */}
      <h3>{show && "모달창 넣어주기"}</h3>

      {/* 3. inline style 적용 방법 - 속성값으로 객체 전달 */}
      {/* ver.html = <div style="background-color: pink; color: navy"></div> */}
      <div style={{ backgroundColor: "pink", color: "navy", fontWeight: 900 }}>
        wow!
      </div>
      <div style={textStyle}>omg!</div>

      {/* 4. class와 onclick jsx에서 사용하기 */}
      {/* ver.html = <div class="text-css" onclick="함수();"></div> */}
      <div className="text-css">jsx에서 css 사용하기 (className)</div>

      {/* 4-1. 차이점:/  html => 함수 호출, jsx => 선언 */}
      <button
        onClick={() => {
          alert("click!");
        }}
      >
        btn
      </button>
      {/* 4-2. 밖에 선언된 경우 함수명만, 아니면 함수를 안에 선언해야만 자동 실행 방지 가능 */}
      <button onClick={handleClick}>btn2</button>

      {/* 5. 닫는 태그 필수 */}
      <br />
      <br></br>
      <input />
      <input></input>

      {/* index.html에서 사용되는 img, favicon은 public, 그 외는 src의 assets 폴더 만들어서 사용하기 */}
      {/* img 절대경로는 public, src 내부 이미지 사용할 경우 import로 불러오기 */}
      <img src="/logo192.png" alt="react img" />
      <img
        src={cat}
        alt="cat img"
        style={{ height: "200px", width: "200px" }}
      />
    </>
  );
}
