import { createSlice } from '@reduxjs/toolkit';

export const spaceSlice = createSlice({
  name: 'auth',
  initialState: {
    selectedSpaceId: undefined,
    selectedSpaceInfo: undefined,
    isMemberSpaceOpen:false
  },
  reducers: {
    setSelectedSpaceInfo: (state, action) => {
      state.selectedSpaceInfo = action.payload;
    },
    clearSelectedSpaceInfo: (state) => {
      state.selectedSpaceInfo = undefined;
    },
    setIsOpenMemberSpace:(state,action)=>{
      console.log(action.payload)
      state.isMemberSpaceOpen=action.payload
    }
  },
});

export const { setSelectedSpaceInfo, clearSelectedSpaceInfo,setIsOpenMemberSpace } =
  spaceSlice.actions;

export default spaceSlice.reducer;
