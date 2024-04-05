export default function Prac() {
  const helloStr = "Hello, this is first practice";
  const divClick = () => {
    alert("클릭!");
  };
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "pink", cursor: "pointer" }}
      onClick={divClick}
      // onClickCapture={() => {
      //   alert("click!");
      // }}
    >
      {helloStr}
    </div>
  );
}
