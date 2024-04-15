import { Component } from "react";

class MyComponent extends Component {
  // component가 mount 되었을 때
  componentDidMount() {
    console.log("class형 component mount!🎨");
  }

  // component가 update(rerendering) 되었을 때
  componentDidUpdate() {
    console.log("class형 component update!🎉");
  }

  // component가 사라질 때 : React.StrictMode 때문에 toggle로 나타나면 켜졌다 꺼졌다 켜짐을 콘솔에서 확인 가능
  componentWillUnmount() {
    console.log("class형 component unmount!🙅‍♀️");
  }

  render() {
    return <div>MyComponent Class형{this.props.number}</div>;
  }
}

export default class ClassLifeCycle extends Component {
  state = {
    number: 0,
    visible: true,
  };

  render() {
    return (
      <>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          number + 1
        </button>
        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          MyComponent toggle
        </button>

        {/* visible 값에 따라 보이거나 안보이거나 하는 로직 생성
            생성 이유 : 보일 때 mount, 안보일 때 unmount 확인 가능
            props로 number 전달 -> state 변경 -> update(rerendering) 확인 가능! */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
