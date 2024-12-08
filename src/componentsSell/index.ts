import { configureStore } from "@reduxjs/toolkit";
import barnReducer from "./SliceShop";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    barn: barnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
