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
    isFieldView: true,
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
    },
    setIsFieldView: (state, action) => {
      state.isFieldView = action.payload;
    },
  },
  extraReducers: {
    [me.fulfilled as any]: (state, action) => {
      state.principal = action.payload;
    },
  },
});

export const { setPrincipal, clearPrincipal, setIsFieldView } =
  authSlice.actions;

export default authSlice.reducer;
