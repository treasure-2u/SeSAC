import EventObj from "./components/EventObj";
import PropsTypes from "./components/PropsTypes";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";

function App() {
  return (
    <div className="App">
      <PropsTypes userName="동물농장108호" userLevel={375} mainCham="janna" />
      <PropsTypes userName="플로시마르" userLevel={320} />
      <UseState />
      <UseRef />
      <EventObj />
    </div>
  );
}

export default App;
