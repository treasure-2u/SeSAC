import styled, { keyframes } from "styled-components";

export default function StyledComponent() {
  //   css도 컴포넌트화 할거라서 css 별도 파일이 필요하지 않음
  const Rotate = keyframes`
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
      width: 100px;
      height: 100px;
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  const MyDiv = styled.div`
    border: 1px solid gray;
    padding: 10px;
    margin: 10px 0;
  `;

  const MyDiv2 = styled.div`
    border: 1px solid red;
    padding: 20px;
    margin: 20px 0;
  `;

  const Child = styled.span`
    background-color: pink;
    color: purple;

    &:hover {
      color: blue;
      animation: ${Rotate} 1s infinite linear;
      // 템플릿 리터럴 안에 있고, rotate라는 변수에 담았기 떄문
    }

    @media screen and (min-width: 720px) {
      background-color: lightblue;
    }
  `;

  const RotateDiv = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : "orange")};
    animation: ${Rotate} 1s infinite linear;
  `;

  return (
    <>
      <div>기본 div</div>
      <MyDiv>styled-components 사용해 만든 MyDiv</MyDiv>
      <MyDiv2>styled-components 사용해 만든 MyDiv2</MyDiv2>
      <Child>Child component</Child>
      <RotateDiv></RotateDiv>
      <RotateDiv bgcolor="gold"></RotateDiv>
    </>
  );
}
