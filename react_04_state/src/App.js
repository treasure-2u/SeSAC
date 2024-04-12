import ClassState from "./components/ClassState";
import FuncState from "./components/FuncState";
import ToggleState from "./components/ToggleState";
import Prac1 from "./components/Prac1";
import CharacterContainer from "./components/CharacterContainer";
import CharacterInfo from "./components/CharacterInfo";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <ClassState />
      <FuncState />
      <ToggleState />
      <Prac1 />
      <CharacterContainer /> */}

      <button onClick={() => setShow(true)}>모달창 버튼</button>

      {show && <Modal msg="확인1" setShow={setShow} />}

      {show && <Modal msg="확인2" isInput={true} setShow={setShow} />}

      {show && (
        <Modal
          msg="확인하시겠습니까?333"
          isCancelBtn={true}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default App;
