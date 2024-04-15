import { useState, useReducer } from "react";

// useReducer hook
// - reducer : state update 역할
// - dispatch : state update 하기 위한 요구(dispatch의 인자 = reducer의 action, state 변경X)
// - action : 요구의 상세 내용

const reducer = (prevState, action) => {
  console.log("dispatch 호출 시 reducer 동작");
  console.log(prevState, action);

  // reducer 함수 내부에는 주로 조건문 사용(ex. switch, if) => 복잡한 state 관리를 위함(여러가지 update logic과 많은 state)
  switch (action.type) {
    case "deposit":
      return Number(prevState) + Number(action.payload);
    case "widthdraw":
      return Number(prevState) - Number(action.payload);
    case "widthdrawAll":
      alert("당신은 거지가 되고 싶습니까?");
      return 0;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  // 출금 및 입금 값(입력 받을 예정)
  const [number, setNumber] = useState(0);

  // const [state, dispatch] = useReducer(reducer, state 초기값)

  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>useReducer 사용</h2>
      <div>잔고 : {money}원</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        입금
      </button>

      <button
        onClick={() => {
          dispatch({ type: "widthdraw", payload: number });
        }}
      >
        출금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "widthdrawAll", payload: number });
        }}
      >
        전액 출금
      </button>
    </>
  );
}
