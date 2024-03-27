import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    login: 'admin',
    password: 'admin',
    isLoggedIn: false
};

export const loginSlice = createSlice({
  name: "loginStore",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  }
  
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;