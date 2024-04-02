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
    loginHandler: (state) => {
      state.isLoggedIn = true;
    },
    logoutHandler: (state) => {
      state.isLoggedIn = false;
    }
  }
  
});

export const { loginHandler, logoutHandler } = loginSlice.actions;
export default loginSlice.reducer;