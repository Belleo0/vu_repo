import { createSlice } from '@reduxjs/toolkit';

export const constructionSlice = createSlice({
  name: 'construction',
  initialState: '',
  reducers: {
    setMainSearchInput: (state, action) => {
      const res = (state = action.payload);
      return res;
    },
  },
});

export const { setMainSearchInput } = constructionSlice.actions;

export default constructionSlice.reducer;
