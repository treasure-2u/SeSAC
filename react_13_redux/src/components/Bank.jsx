import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deposit, withdraw } from "../store/modules/bankReducer";

export default function Bank() {
  const [inputNum, setInputNum] = useState(0);
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  return (
    <>
      <h2>bank state redux로 관리하기</h2>
      <div>잔고 : {money}원</div>
      <input
        type="number"
        value={inputNum}
        step="1000"
        onChange={(e) => setInputNum(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(inputNum))}>입금</button>
      <button onClick={() => dispatch(withdraw(inputNum))}>출금</button>
    </>
  );
}
