import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    polylineInfo: undefined,
  },
  reducers: {
    setPolylineInfo: (state, action) => {
      state.polylineInfo = action.payload;
    },
    clearPolylineInfo: (state) => {
      state.polylineInfo = undefined;
    },
  },
});

export const { setPolylineInfo, clearPolylineInfo } = mapSlice.actions;

export default mapSlice.reducer;
