import { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");

  // calc 함수는 inputVal state가 update 될 때도 함수 실행되어 콘솔 출력되는 것을 확인할 수 있음
  //
  //   const calc = () => {
  //     console.log("...calc");

  //     return count * 2;
  //   };

  // useMemo 사용 -> count의 값에 변화가 있을 때에만 콜백함수 실행
  // 렌더링 과정에서 두 번째 받은 인자로 받은 의존성 배열 내 요소의 값이 바뀌는 경우
  // 첫 번째 인자로 받은 콜백 함수가 실행 -> return값 반환
  // inputVal state가 변경되면 component를 리렌더링 되나 calc 함수는 다시 실행되지 않음
  // 해당 함수의 반환값을 기억하고 있다가 의존성 배열의 값(count) 변경 시 재실행
  const calc = useMemo(() => {
    console.log("...calc...");

    return count * 2;
  }, [count]);

  return (
    <>
      <h2>useMemo hook</h2>
      <div>inputVal : {inputVal}</div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <div>count : {count}</div>

      {/* useMemo 사용 X => <div>calc : {calc()}</div> */}
      {/* useMemo 사용 */}
      <div>{calc}</div>
    </>
  );
}

// useMemo는 수행한 연산의 결과값을 기억하기 때문에 불필요한 계산 최소화 및 리렌더링 방지 가능

// useEffect vs useMemo
// - useEffect : 해당 컴포넌트의 렌더링이 완료된 이후 실행/
//               렌더링 후 상태가 업데이트 되었을 때를 감지하여 동작하기 때문에 리렌더링 방지 불가
// - useMemo : 렌더링 과정 중에 실행/
//             렌더링 과정 중 의존성 배열의 값 변경 여부 확인 후 값 변경 있으면 이전에 저장한 값과 비교하여 다른 경우에만 리렌더링
//             useMemo는 메모이제이션을 통해 불필요한 계산을 최소화, 리렌디링 방지하여 렌더링 성능 최적화 사용 hook
