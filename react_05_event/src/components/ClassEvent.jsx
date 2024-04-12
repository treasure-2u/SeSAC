import React, { Component } from "react";

export default class ClassEvent extends Component {
  constructor(props) {
    super(props);

    // handleClick이라는 함수의 this를 함수 자체의 this가 아닌
    // class 자체를 의미하는 this로 binding(묶어줌)
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    msg: "방탈출 모집",
  };

  // 함수 선언문을 사용해 메서드 정의
  // 함수 내부의 this !== class this
  // 생성자 함수 내부에서 this를 bind 사용하여 묶어줌
  handleClick() {
    this.setState({ msg: "제로(1/4) - 공포 방탈출" });
  }

  render() {
    return (
      <>
        <h2>Class형 Component event</h2>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>모집</button>

        <input type="text" onChange={(e) => console.log(e)} />
      </>
    );
  }
}
