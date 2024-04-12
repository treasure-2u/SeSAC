import { useState } from "react";

export default function Prac1() {
  // 현재 입력되어있는 사용자의 데이터
  // 서버에서 받아왔다는 전제 하에 작성되어 있음
  // data state는 유저의 id, user, email을 포함하고 있는 객체의 "배열"
  const [data, setData] = useState([
    { id: 1, user: "장원영", email: "wonyoung@gmail.com" },
    { id: 2, user: "안유진", email: "yujin@gmail.com" },
  ]);

  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  // 사용자의 이름을 받는 input에 변경사항이 있을 떄 실행되는 함수
  // onChange로 연결 되어 있으며 해당 함수가 실행될 때
  // 해당 이벤트가 발생한 input의 value를 inputUser State의 값으로 업데이트함
  const onChangeUser = (e) => setInputUser(e.target.value);

  // onChangeEmail 함수 설명 ...
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  // eventClick 함수 설명 ...
  const eventClick = () => {
    // 새로운 데이터를 기존 데이터 배열에 추가
    // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // const nextData = data.concat({
    //   id: nextId,
    //   user: inputUser,
    //   email: inputEmail,
    // });

    // 또는
    // nextData는 새로 업데이트 될 데이터
    // 원래 data state의 값을 spread 연산자를 사용해 객체 각각을 불러내고
    // 가장 마지막에 새로 입력받은 user의 정보를 객체 형태로 추가하고 있음
    const nextData = [
      ...data,
      {
        id: nextId,
        user: inputUser,
        email: inputEmail,
      },
    ];

    //
    setNextId(nextId + 1);
    //
    setData(nextData);
    //
    setInputUser("");
    //
    setInputEmail("");
  };

  //
  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      eventClick();
    }
  };

  //
  const onRemoveData = (id) => {
    const NextData = data.filter((data) => data.id !== id);
    setData(NextData);
  };

  //
  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
}
