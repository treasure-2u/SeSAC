// 초기값 설정
const initialState = 0;

// 액션 타입 정의(type으로 decrement, increment와 reset 전달)
// 다른 state에서도 사용 가능한 type은 앞에 원하는 로직 구현하고자 type 특정 => count/decrement
export const counterMinus = () => ({ type: "count/decrement" });
// counterMinus는 함수 -> counterMinus() 형식으로 호출 시 {type:"decrement"}를 반환
console.log(counterMinus()); // {type: "decrement"}
// dispatch(counterMinus()) == dispatch({type: "decrement"})

// {type: "increment";}
export const counterPlus = () => ({ type: "count/increment" });
// {type: "reset";}
export const counterReset = () => ({ type: "count/reset" });

// reducer 작성
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/increment":
      return state + 1;
    case "count/decrement":
      return state - 1;
    case "count/reset":
      return 0;
    default:
      return state;
  }
};
