// 1. props 매개변수(인자)

/*
export default function FuncProps(props) {
  // 부모 요소에서 props 전달한 data가 props 내부에 객체 형태로 저장
  console.log(props);

  return (
    <>
      <h1>함수형 component에서 props 사용</h1>
      <div>전달받은 props 객체를 점접근법으로 바로 접근해 사용</div>
      <div>weather props로 전달받은 data : {props.weather}</div>
      <div>feeling props로 전달받은 data : {props.feeling}</div>
    </>
  );
}
*/

// 2. component 내에서 props 매개변수를 구조 분해
/*
export default function FuncProps(props) {
  // props를 구조 분해 할당해서 weather와 feeling으로 바로 값을 사용할 수 있도록 하기
  const { weather, feeling } = props;

  console.log(weather);
  console.log(feeling);

  return (
    <>
      <h1>함수형 component에서 props 사용하기</h1>
      <div>전달받은 props 객체를 구조 분해하여 사용</div>
      <div>weather props로 전달받은 data : {weather}</div>
      <div>feeling props로 전달받은 data : {feeling}</div>
    </>
  );
}
*/

// 3. 매개변수로 props를 받아올 때부터 구조 분해(해당 value 바로 받고 사용)
/*
export default function FuncProps({ weather, feeling }) {
  console.log(weather);
  console.log(feeling);

  return (
    <>
      <h1>함수형 component에서 props 사용하기</h1>
      <div>매개변수로 props를 받아올 때부터 구조 분해하여 사용</div>
      <div>weather props로 전달받은 data : {weather}</div>
      <div>feeling props로 전달받은 data : {feeling}</div>
    </>
  );
}
*/

// 4. props handling
/*
import PropTypes from "prop-types";

export default function FuncProps({ weather, feeling, date }) {
  //   console.log(weather);
  //   console.log(feeling);

  return (
    <>
      <h1>함수형 component에서 props 사용하기</h1>
      <div>default props를 사용해 weather props만 보여주기</div>
      <div>Today's date is {date}</div>
      <div>weather props로 전달받은 data : {weather}</div>
      <div>feeling props로 전달받은 data : {feeling}</div>
    </>
  );
}

// weather props의 기본값 설정
// 만약 weather props가 전달되지 않는다면 defaultProps에서 해당 값을 찾아 사용
FuncProps.defaultProps = {
  weather: "cloudy",
};

// Props의 type 지정
// 전달받을 props의 type을 지정해 예기치 못한 error 발생 방지(+ isRequired)
// isRequired : 필수로 해당 props를 전달하도록 제한(console에 error 출력)
// 이외 props들은 전달되지 않으면 undefined일 뿐 error 안남(js -> 유연한 언어)

FuncProps.propTypes = {
  weather: PropTypes.string,
  feeling: PropTypes.string,
  date: PropTypes.number.isRequired,
};
*/

// 5. props.children
// parent component에서 children component가 import 되어 사용될 때
// 해당 component의 content를 가지고 와야 하는 경우

// 문자열 전달
// export default function FuncProps(props) {
//     return <div>{props.children}</div>;

// 함수 전달
// export default function FuncProps(props) {
//   return <div onClick={props.children}>click!</div>;
// }

// 많은 요소 전달
export default function FuncProps(props) {
  return <>{props.children}</>;
}
