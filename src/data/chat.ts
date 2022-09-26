import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    selectedUserInfo: undefined,
  },
  reducers: {
    setSelectedUserInfo: (state, action) => {
      state.selectedUserInfo = action.payload;
    },
    clearSelectedUserInfo: (state) => {
      state.selectedUserInfo = undefined;
    },
  },
});

export const { setSelectedUserInfo, clearSelectedUserInfo } = chatSlice.actions;

export default chatSlice.reducer;
