import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterSlice from "./AllSlices/counterSlice";

const store = configureStore({
  reducer: {

counter:counterSlice

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;