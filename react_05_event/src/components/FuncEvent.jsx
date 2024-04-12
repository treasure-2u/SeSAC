import { useState } from "react";

export default function FuncEvent() {
  const [msg, setMsg] = useState("🤯");
  const [menu, setMenu] = useState("");

  const msgToEng = () => {
    setMsg("cheer up!");
  };

  const msgToKor = () => {
    setMsg("힘내세요!");
  };

  const alertMsg = (msg) => {
    alert(msg);
  };

  const handleEnter = (e) => {
    // e는 react 합성 이벤트 객체를 의미
    // target은 해당 event가 발생한 요소에 접근할 수 있음
    // key는 해당 이벤트가 발생하기 위해 눌려진 키보드를 의미
    // 일반 문자는 Process로, Enter는 Enter로 값을 가짐
    // code는 해당 event가 발생하기 위해 눌려진 키보드 키를 더 자세히 확인
    // 일반 문자는 keyA와 같이 key 뒤에 눌려진 키를 확인할 수 있음
    // console.log(e);
    if (e.key === "Enter") {
      alert(`점심메뉴 ${menu} 추천!`);
    }
  };

  return (
    <>
      <h2>function component - event handling</h2>
      <div>{msg}</div>
      {/* click event 발생 시 실행할 함수 자체를 onClick에 전달 -> 함수 호출X */}
      <button onClick={msgToEng}>🔥</button>
      <button onClick={msgToKor}>💪</button>

      <br />

      {/* 함수에 매개변수를 전달하는 경우 */}
      {/* 방법 1. onClick 내부에 익명함수를 선언하여 전달(호출X) */}
      <button onClick={() => alertMsg("익명함수")}>alertMsg - 익명함수</button>

      {/* 방법 2. bind method 사용 */}
      <button onClick={alertMsg.bind(null, "bind method")}>
        alertMsg - bind method
      </button>

      <br />

      {/* 방법 3. input tag에서 변경사항 발생 시 해당 value를 console에 출력 */}
      <input
        type="text"
        // value="default value"
        value={menu}
        placeholder="점메추!"
        onChange={(e) => {
          // 여기에서 사용되는 e는 브라우저의 native 이벤트 객체가 아닌 react의 synthetic event 객체
          // console.log(e);
          // console.log(e.target.value);
          setMenu(e.target.value);
        }}
        // onKeyDown={() => console.log("실행")} // 키보드 눌릴 때마다
        onKeyDown={handleEnter}
      />
    </>
  );
}
