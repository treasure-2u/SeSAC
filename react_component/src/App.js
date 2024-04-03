import "./App.css";
import ClassComponents from "./components/ClassComponents";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  return (
    <div className="App">
      {/* return문 안에서의 jsx 주석형태 */}
      {/* 호출 및 사용하는 방법 */}
      <ClassComponents />
      <ClassComponents></ClassComponents>
      <FunctionComponent></FunctionComponent>
    </div>
  );
}

export default App;
