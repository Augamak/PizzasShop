import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    totalPrice: 0,
    items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
        state.items.push(action);
        state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
        }, 0)
    },
    clearItems(state) {
        state.items = []
    }
  }
});

export const { addItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;