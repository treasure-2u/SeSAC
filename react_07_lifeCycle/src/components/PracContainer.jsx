// export default function PracContainer(props) {
//     const { children } = props;
// }

// 바로 구조분해에 children 작성
export default function PracContainer({ children }) {
  return (
    <>
      <header>PostList📝</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

<PracContainer>작성된 content가 children</PracContainer>;
