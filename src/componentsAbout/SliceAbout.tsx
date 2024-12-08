import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ScrollState {
  shouldScrollToTarget: boolean;
}

const initialState: ScrollState = {
  shouldScrollToTarget: false,
};

export const scrollToTarget = createAsyncThunk(
  'scroll/scrollToTarget',
  async (_, { getState, dispatch }) => {
    const { scroll } = getState() as { scroll: ScrollState };
    if (scroll.shouldScrollToTarget) {
      dispatch(setShouldScrollToTarget(false));
    }
  }
);

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setShouldScrollToTarget: (state, action: PayloadAction<boolean>) => {
      state.shouldScrollToTarget = action.payload;
    },
  },
});

export const { setShouldScrollToTarget } = scrollSlice.actions;
export default scrollSlice.reducer;
