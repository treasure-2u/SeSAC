import { Component } from "react";
import PropTypes from "prop-types";

export default class ClassProps extends Component {
  render() {
    //   console에 찍으면 객체 형태 출력

    return (
      <>
        <h1>class component props</h1>
        <div>주문 내역 : {this.props.drink}</div>
        <div>결제 수단 : {this.props.payment}</div>
        <div>결제 금액 : {this.props.price}</div>
      </>
    );
  }

  // class component에서 props 관련 속성을 추가하는 방법1 - static
  // static : render() 아닌 component 선언 내부에 작성
  // price props가 undefined라면 default value로 8500 사용
  static defaultProps = {
    price: 8500,
    payment: "cash",
  };
}

// class component에서 props 관련 속성을 추가하는 방법2 - class component 밖에서 props 속성 지정(점접근법)
// drink, payment, props는 string/ price props는 number로 type 제한
ClassProps.propTypes = {
  drink: PropTypes.string,
  payment: PropTypes.string.isRequired,
  price: PropTypes.number,
};
