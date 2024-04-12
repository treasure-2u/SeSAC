import React, { Component } from "react";

export default class HandlerEx extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.ChangeColorRed = this.ChangeColorRed.bind(this);
    this.ChangeColorBlue = this.ChangeColorBlue.bind(this);
  }

  state = {
    msg: "hello world",
    text: "검정색 글씨",
  };

  handleClick() {
    this.setState({ msg: "GoodbyeWorld!" });
  }

  ChangeColorRed() {
    this.setState({ text: "빨간색 글씨" });
  }

  ChangeColorBlue() {
    this.setState({ text: "파란색 글씨" });
  }

  render() {
    return (
      <>
        <h2>{this.state.msg}</h2>
        <button onClick={this.handleClick}>클릭</button>

        <h2>{this.state.text}</h2>
        <button onClick={this.ChangeColorRed}>빨간색</button>
        <button onClick={this.ChangeColorBlue}>파란색</button>
      </>
    );
  }
}
