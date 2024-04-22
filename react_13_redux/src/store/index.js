// 여러 개의 reducer를 index.js에서 하나로 묶어줌 -> 관리 편리
import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./modules/countReducer";
import { isLoggedinReducer } from "./modules/isLoggedinReducer";
import { bankReducer } from "./modules/bankReducer";

// combineReducers : 여러 개의 reducer 묶어주는 라이브러리
const rootReducer = combineReducers({
  count: counterReducer,
  isLoggedin: isLoggedinReducer,
  money: bankReducer,
});

export default rootReducer;
