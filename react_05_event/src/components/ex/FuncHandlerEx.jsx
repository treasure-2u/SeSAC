// import React from "react";

// export default function FuncHandlerEx() {
//   const [msg, setMsg] = useState("hello world");

//   const [textColor, setTextColor] = useState({
//     color: "black",
//     text: "검정색 글씨",
//   });

//   return (
//     <>
//       <h2>{msg}</h2>
//       <button onClick={() => setMsg("Goodbye world")}>클릭</button>

//       <h2 style={{ color: textColor.color }}>{textColor.text}</h2>
//       <button
//         onClick={() => {
//           setTextColor({ color: "red", text: "빨간색 글씨" });
//         }}
//       >
//         빨간색
//       </button>
//       <button
//         onClick={() => {
//           setTextColor({ color: "blue", text: "파란색 글씨" });
//         }}
//       >
//         파란색
//       </button>
//     </>
//   );
// }

import React, { useState } from "react";

export default function FuncHandlerEx() {
  const [msg, setMsg] = useState("hello world");

  const [textColor, setTextColor] = useState({
    color: "black",
    text: "검정색 글씨",
  });

  return (
    <>
      <h2>{msg}</h2>
      <button onClick={() => setMsg("Goodbye world")}>클릭</button>

      <h2 style={{ color: textColor.color }}>{textColor.text}</h2>
      <button
        onClick={() => {
          setTextColor({ color: "red", text: "빨간색 글씨" });
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setTextColor({ color: "blue", text: "파란색 글씨" });
        }}
      >
        파란색
      </button>
    </>
  );
}
