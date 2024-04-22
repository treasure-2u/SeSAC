import { useDispatch, useSelector } from "react-redux";
import {
  counterMinus,
  counterPlus,
  counterReset,
} from "../store/modules/countReducer";
import { isLoggedinChange } from "../store/modules/isLoggedinReducer";

export default function UseAllState() {
  // useSelector를 통해 rootReducer에서 관리되는 isLoggedin state에 접근
  const isLoggedin = useSelector((state) => state.isLoggedin);

  return (
    <div style={{ border: "5px solid pink", padding: "10px" }}>
      <h2>Parent Component</h2>
      <div>Child Component: UseAllState Component</div>
      <div>props 아직 전달 X</div>
      <div>
        현재 전역으로 관리되는 isLoggedin state 값 :{" "}
        {isLoggedin ? "로그인 됨" : "로그인 안됨"}
      </div>
      <Child />
    </div>
  );
}

function Child() {
  const count = useSelector((state) => state.count);
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "5px solid skyblue", padding: "10px" }}>
      count state: {count}
      <button onClick={() => dispatch({ type: "count/increment" })}>+ 1</button>
      <button onClick={() => dispatch({ type: "count/decrement" })}>- 1</button>
      <button onClick={() => dispatch({ type: "count/reset" })}>reset</button>
      <div>countReducer에서 정의한 action 함수 사용</div>
      <button onClick={() => dispatch(counterPlus())}>+ 1</button>
      <button onClick={() => dispatch(counterMinus())}>- 1</button>
      <button onClick={() => dispatch(counterReset())}>reset</button>
      <div>isLoggedIn state update</div>
      {/* props가 아닌 전역으로 관리 */}
      <button onClick={() => dispatch({ type: "isLoggedin/change" })}>
        {isLoggedin ? "logout" : "login"}
      </button>
      <br />
      <button onClick={() => dispatch(isLoggedinChange())}>
        {isLoggedin ? "logout" : "login"}
      </button>
    </div>
  );
}
