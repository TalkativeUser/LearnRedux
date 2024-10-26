import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
  text: string;
}

const initialState: CounterState = {
  counter: 10,
  text: "Icrees Counter ++",
};

const counterSlice = createSlice({
  name: "myCounter",
  initialState,
  reducers: {
    increment: (prevState: CounterState, action: PayloadAction<number>) => {
      prevState.counter += action.payload;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
