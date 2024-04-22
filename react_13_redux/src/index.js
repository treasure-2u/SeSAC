import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store"; // index 파일의 경우 디렉토리까지만 작성해도 알아서 찾아감
import { composeWithDevTools } from "@redux-devtools/extension";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 1. redux 쉽게 사용하기(하나의 상태만 관리, 코드 분리 안한 상태에서 했던 코드)
// const store = configureStore({ reducer });
// // 객체의 key와 value가 동일하다면 한 번만 작성 시 알아서 같은 이름의 value를 전달
// // const store = configureStore({reducer: reducer}); // 객체 값만 넣어줘도 알아서 찾아가기 때문에 코드 더 짧게 작성

// // redux 사용을 위한 두 번째로 reducer 함수 만들기
// function reducer(state = 0, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return 0;
//     default:
//       return state;
//   }
// }

// 2. redux를 사용해 여러 개의 상태 관리, 코드 분리
// reducer 따로 만들기, store 관리하는 폴더 따로 만들기
// src/store/index.js : store의 전체 상태 관리 및 하나로 통합
// src/store/module/countReducer.js & src/store/module/isLoggedinReducer.js : 각각의 state 관리 reducer
const store = configureStore({ reducer: rootReducer });

root.render(
  // redux 사용 첫 번쨰로 <Provider>를 최상위에 감싸줘야 함(import 필요)
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
