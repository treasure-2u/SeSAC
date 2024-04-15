import ClassLifeCycle from "./components/ClassLifeCycle";
import FuncLifeCycle from "./components/FuncLifeCycle";
import PracContainer from "./components/PracContainer";
import PracPost from "./components/PracPost";

function App() {
  return (
    <div className="App">
      <ClassLifeCycle />
      <FuncLifeCycle />

      <PracContainer>
        <PracPost />
      </PracContainer>
    </div>
  );
}

export default App;
