import { configureStore } from "@reduxjs/toolkit";
import barnReducer from "../../components/modules/modules-sell/shared/slice/slice-shop";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import scrollReducer from "../../components/modules/moduels-about/shared/slice/SliceAbout";

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
