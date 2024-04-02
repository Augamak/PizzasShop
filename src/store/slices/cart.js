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
    removeItem(state, action) {
        state.items = state.items.filter((obj) => obj.id === action)
    },
    clearItems(state) {
        state.items = []
    }
  }
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;