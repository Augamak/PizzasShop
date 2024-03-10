import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    login: 'admin',
    pasword: 'admin'
};

export const counterSlice = createSlice({

  initialState
  
});

export const { addNewArticle } = counterSlice.actions;
export default counterSlice.reducer;