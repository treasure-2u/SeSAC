import { useState } from "react";

export default function ToggleState() {
  const [showEnglish, setShowEnglish] = useState(true);

  return (
    <div>
      <h2>function component에서 state 사용 - useState toggle</h2>
      <button
        onClick={() => {
          setShowEnglish(!showEnglish);
        }}
      >
        {showEnglish ? "한글" : "영어"}
      </button>
      <div>{showEnglish ? "apple" : "사과"}</div>
    </div>
  );
}
