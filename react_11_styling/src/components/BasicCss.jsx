// import "../styles/basicCss.css";

export default function BasicCss() {
  const divStyle = {
    backgroundColor: "navy",
    color: "pink",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <>
      <h1>일반 CSS 사용</h1>

      <h3>React style 적용 방법</h3>
      <ol>
        <li>1. inline style 적용</li>
        <div
          style={{
            backgroundColor: "pink",
            color: "navy",
            fontSize: 25,
            textAlign: "right",
          }}
        >
          inline style 적용
        </div>
        <div style={divStyle}>inline style 객체 형태로 변수에 담아 적용</div>
        <br />
        <li>2. css 파일 style 적용</li>
        <div className="box">.box</div>

        <div className="container">
          <div className="item item1">.item.item1</div>
          <div className="item">.item</div>
        </div>
      </ol>
    </>
  );
}
