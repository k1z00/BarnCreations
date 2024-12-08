import { configureStore } from "@reduxjs/toolkit";
import barnReducer from "./componentsSell/SliceShop";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import scrollReducer from "./componentsAbout/SliceAbout";

const store = configureStore({
  reducer: {
    barn: barnReducer,
    scroll: scrollReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
