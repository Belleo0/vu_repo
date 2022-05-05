import { createSlice } from '@reduxjs/toolkit';

export const spaceSlice = createSlice({
  name: 'auth',
  initialState: {
    selectedSpaceId: undefined,
  },
  reducers: {
    setSelectedSpaceId: (state, action) => {
      state.selectedSpaceId = action.payload;
    },
    clearSelectedSpaceId: (state) => {
      state.selectedSpaceId = undefined;
    },
  },
});

export const { setSelectedSpaceId, clearSelectedSpaceId } = spaceSlice.actions;

export default spaceSlice.reducer;
