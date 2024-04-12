// import React, { Component } from "react";

// export default class Prac1 extends Component {
//   state = {
//     num: 0,
//   };

//   render() {
//     const { num } = this.state;

//     return (
//       <>
//         <h1>{num}</h1>
//         <button onClick={() => this.setState({ num: num + 2 })}> + 2 </button>
//         <button onClick={() => this.setState({ num: num - 1 })}> - 1 </button>
//         <button onClick={() => this.setState({ num: 0 })}> 초기화 </button>
//       </>
//     );
//   }
// }

// 함수형 컴포넌트에서 useState hook을 통해 state 사용 실습

import { useState } from "react";

export default function Prac1() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 2);
  };

  const initialization = () => {
    setNum(0);
  };

  return (
    <>
      <h2>
        {num}
        {num > 7 ? "🐝" : "🍯"}
      </h2>
      <button onClick={increase}>+ 1</button>
      {/* 같은 코드, 함수이름 작성 시 () 넣으면 원하는 이벤트 발생 안됨
      <button onClick={()=>increase()}>+ 1</button> */}
      <button onClick={decrease}>- 2</button>
      <button onClick={initialization}>initialization</button>
    </>
  );
}
