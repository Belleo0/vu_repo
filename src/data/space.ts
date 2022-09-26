import { createSlice } from '@reduxjs/toolkit';

export const spaceSlice = createSlice({
  name: 'auth',
  initialState: {
    selectedSpaceId: undefined,
    selectedSpaceInfo: undefined,
  },
  reducers: {
    setSelectedSpaceInfo: (state, action) => {
      state.selectedSpaceInfo = action.payload;
    },
    clearSelectedSpaceInfo: (state) => {
      state.selectedSpaceInfo = undefined;
    },
  },
});

export const { setSelectedSpaceInfo, clearSelectedSpaceInfo } =
  spaceSlice.actions;

export default spaceSlice.reducer;
