import { Component } from "react";

// export default class ClassState extends Component {
//   // 처음 클래스형 컴포넌트가 나왔을 때 state를 사용한 방법
//   constructor(props) {
//     super(props); // Components class에서 props를 상속

//     this.state = {
//       banana: "바나나",
//     };
//   }
// }

// 현재 클래스형 컴포넌트에서 state를 사용하는 방법
// constructor 생성자 함수를 작성하는 대신 state만 바로 작성
// constructor 생성자 함수를 작성하지 않으면 자동으로 아래의 코드 실행됨
/* 작성하지 않아도 자동으로 인식하는 코드
constructor(props) {
 super(props);
}
*/

export default class ClassState extends Component {
  state = {
    banana: "바나나",
  };

  render() {
    const { banana } = this.state.banana; // 구조분해 방법
    // const banana = this.state.banana; // 바로 값 넣어주는 방법
    return (
      <>
        <h2>class형 component에서 state 사용하기</h2>
        <button onClick={() => this.setState({ banana: "banana" })}>
          영어로 변경
        </button>
        <div>{this.state.banana}</div>
        <div>{banana}</div>
      </>
    );
  }
}
