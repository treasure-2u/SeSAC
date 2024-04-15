// 서버에게 빠르게 정보 요청해야 하는데 계속 리렌더링 되면 안될 때 useEffect 사용
import { useState, useEffect } from "react";

const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState(""); // text state 정의

  /*
  // component mount시 실행
  useEffect(() => {
    console.log("Function Component mount!🔥");

    // component unmount시 실행
    return () => {
      console.log("Function Component unmount!🥲");
    };
  }, []);
  */

  // component mount&update시 실행 - 의존성 배열 작성 x
  useEffect(() => {
    console.log("Function Component mount&update!🐝 (의존성 배열 x)");
  });

  /*
  // component mount&update시 실행(number state)
  useEffect(() => {
    console.log("Function Component update!🎈 (number)");
  }, [number]);

  // component mount&update시 실행(input에 text)
  useEffect(() => {
    console.log("Function Component update!📖 (text)");
  }, [text]);
  */

  // component mount&update시 실행(number state, input text) // 인자 여러 개 줄 수 있음
  useEffect(() => {
    console.log("Function Component update! (number & text)");
  }, [number, text]);

  return (
    <>
      <div>MyComponent function형 {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>text state : {text}</div> {/* text state 출력 */}
    </>
  );
};

export default function FuncLifeCycle() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>number + 1</button>
      <button onClick={() => setVisible(!visible)}>MyComponent toggle</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
