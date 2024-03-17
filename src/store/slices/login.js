import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    login: 'admin',
    pasword: 'admin',
    isLogedIn: false
};

export const loginSlice = createSlice({
  name: "loginStore",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogedIn = true;
    },
    logout: (state) => {
      state.isLogedIn = false;
    }
  }
  
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;