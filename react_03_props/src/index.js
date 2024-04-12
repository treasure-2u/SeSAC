import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // 개발 환경에서 엄격하게 테스트 하기 위해 2번씩 콘솔에 찍히나 실제 배포 시에는 한 번만 찍힘
);
