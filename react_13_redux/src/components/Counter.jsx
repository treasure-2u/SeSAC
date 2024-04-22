import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  // redux 내 모든 state 가져오기 때문에 state.number 식으로 특정 값 가져오는 게 좋음
  // 현재 코드 내 state 1개
  const number = useSelector((state) => state);
  //   const number = useSelector((state) => state.number);
  console.log(number); // 초기 설정값(0) 출력

  const dispatch = useDispatch();
  // react 컴포넌트 리렌더링 할 때 함수 자체를 전달(함수 실행 명령 안되도록)하여 인자 넘겨줘야 하는 함수들은 익명 함수화

  return (
    <>
      <h2>redux를 사용해 store에서 관리되는 state 가져오고, 사용하기</h2>
      <div>전역 관리되는 state 값: {number}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+ 1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>- 1</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  ); // 프래그먼트 태그
}
