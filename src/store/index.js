import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/login"

const store = configureStore ({
    reducer: {
        user: userReducer,
    },
})

export default store

