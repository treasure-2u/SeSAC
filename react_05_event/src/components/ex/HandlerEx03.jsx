import { useState } from "react";

export default function HandlerEx03() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <button onClick={() => setDisplay(!display)}>
        {display ? "delete" : "show"}
      </button>
      {display && <h2>hi!</h2>}
    </>
  );
}
