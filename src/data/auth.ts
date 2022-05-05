import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '@api';

export const me: any = createAsyncThunk('/auth/login', async (thunkAPI) => {
  const { data } = await api.get(`/auth/login`);
  return data?.result;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    principal: undefined,
  },
  reducers: {
    setPrincipal: (state, action) => {
      state.principal = action.payload;
      window.sessionStorage.setItem(
        'principal',
        JSON.stringify(action.payload),
      );
    },
    clearPrincipal: (state) => {
      window.sessionStorage.clear();
      state.principal = undefined;
      console.log('...??');
    },
  },
  extraReducers: {
    [me.fulfilled as any]: (state, action) => {
      state.principal = action.payload;
    },
  },
});

export const { setPrincipal, clearPrincipal } = authSlice.actions;

export default authSlice.reducer;
