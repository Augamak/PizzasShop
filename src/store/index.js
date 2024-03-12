import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/login"

export const store = configureStore ({
    reducer: {
        counter: counterReducer,
    },
})