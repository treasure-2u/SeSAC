// redux tollkit의 createSlice 사용하여 reducer와 action 동시 정의

import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 }; // 객체 형태로도 작성 가능

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increase: (state, action) => {
      state.count += action.payload;
    },
    decrease: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, increase, decrease, reset } =
  countSlice.actions;
export default countSlice.reducer;
