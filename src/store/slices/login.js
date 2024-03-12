import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    login: 'admin',
    pasword: 'admin'
};

export const usersSlice = createSlice({
  name: "usersStore",
  initialState,
  reducers: {
    
  }
  
});

export const {  } = usersSlice.actions;
export default usersSlice.reducer;