import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/login"
import cartReducer from "./slices/cart"

const store = configureStore ({
    reducer: {
        user: userReducer,
        cart: cartReducer
    },
})

export default store

