import { useCallback } from "react";
import { useState } from "react";

export default function UseCallback2() {
  const [text, setText] = useState("");

  // input tag에 onChange 속성으로 연결된 함수의 경우 update가 매우 잦아 리렌더링 될 때마다 로직 변화 없이 불필요하게 이벤트 핸들러 함수 생성되는 중
  //   const handleChange = (e) => {
  //     setText(e.target.value);
  //   };

  // useCallback hook을 사용해서 콜백 함수 자체를 저장하고 사용(불필요한 함수 생성 X)
  // useCallback hook에서 의존성 배열이 빈 배열인 경우 다시 선언되지 않음
  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // 동일한 결과, but 함수가 메모리에 저장되어 다시 선언되지 않고 불러와 사용되는 중

  return (
    <>
      <h2>UseCallback2 hook</h2>
      <div>text : {text || "없음"}</div>
      <input type="text" value={text} onChange={handleChange} />
    </>
  );
}

// 1. text state 선언
// 2. input 요소 만들어서 해당 input 변경사항 발생하면 input의 값을 text state에 저장
// 3. input에 변경사항 발생 시 handleChange라는 함수 사용하기

/* useMemo vs useCallback 차이점
const memoizationValue = useMemo(()=>{},[depency arr]);
const memoizationCallback = useCallback(()=>{},[depency arr]);

useCallback은 useMemo를 기반으로 만들어진 hook
공통점 : 성능 최적화, 차이점 : 값 vs 함수 중 재사용할지

useMemo는 값의 재사용을 위해 전달된 함수 실행, "결과(return값)"을 메모이제이션
useCallback은 함수 재사용을 위해 전달된 "함수 자체"를 메모이제이션
*/
