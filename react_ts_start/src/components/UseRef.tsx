import { useRef } from "react";

export default function UseRef() {
  // 1. DOM 요소에 접근할 때
  // input 요소의 경우
  const inputRef = useRef<HTMLInputElement>(null); // null 전달하기

  // 2. 리렌더링 되어도 유지되는 로컬 변수 필요할 때
  const localVal = useRef<string>("rerendering 되어도 유지됨");
  return (
    <>
      <h2>ts에서 UseRef 타입 지정하기</h2>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>
        {/* inputRef.current? => 없을 수 있기 때문에 ? 붙여야 error X */}
        input에 focus 시키기
      </button>
      <div>localVal : {localVal.current}</div>
    </>
  );
}
